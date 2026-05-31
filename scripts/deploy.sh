#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────
# deploy.sh — Velai Website VPS Deploy
# Uso: ./scripts/deploy.sh [--env-file .env.production]
# ─────────────────────────────────────────────────────────
set -euo pipefail

# ── Config ───────────────────────────────────────────────
APP_DIR="/opt/velai-website"
REPO_URL="${REPO_URL:-}"          # ex: git@github.com:seu-usuario/velai-website.git
BRANCH="${BRANCH:-main}"
ENV_FILE="${1:-}"

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

log()  { echo -e "${GREEN}[deploy]${NC} $*"; }
warn() { echo -e "${YELLOW}[warn]${NC}   $*"; }
die()  { echo -e "${RED}[error]${NC}  $*" >&2; exit 1; }

# ── Checks ───────────────────────────────────────────────
command -v docker          &>/dev/null || die "Docker não encontrado. Instale com: curl -fsSL https://get.docker.com | sh"
command -v docker-compose  &>/dev/null || warn "docker-compose não encontrado — usando 'docker compose' (plugin v2)"

DC="docker compose"
command -v docker-compose &>/dev/null && DC="docker-compose"

# ── Pull ou clone ─────────────────────────────────────────
if [ -d "$APP_DIR/.git" ]; then
  log "Atualizando repositório em $APP_DIR..."
  git -C "$APP_DIR" fetch origin
  git -C "$APP_DIR" reset --hard "origin/$BRANCH"
else
  [ -z "$REPO_URL" ] && die "REPO_URL não definida. Exporte: export REPO_URL=git@github.com:usuario/repo.git"
  log "Clonando repositório em $APP_DIR..."
  git clone --branch "$BRANCH" "$REPO_URL" "$APP_DIR"
fi

cd "$APP_DIR"

# ── Variáveis de ambiente ─────────────────────────────────
if [ -n "$ENV_FILE" ] && [ -f "$ENV_FILE" ]; then
  log "Copiando $ENV_FILE → .env.production"
  cp "$ENV_FILE" .env.production
elif [ ! -f ".env.production" ]; then
  warn "Nenhum .env.production encontrado — criando a partir do exemplo"
  [ -f ".env.example" ] && cp .env.example .env.production
fi

# ── Certificados SSL ─────────────────────────────────────
if [ ! -d "nginx/ssl" ] || [ -z "$(ls -A nginx/ssl 2>/dev/null)" ]; then
  warn "Pasta nginx/ssl vazia ou inexistente."
  warn "Coloque fullchain.pem e privkey.pem em ./nginx/ssl/"
  warn "Ou use Certbot: certbot certonly --standalone -d seu-dominio.com"
  warn "Continuando sem SSL por enquanto (http apenas)..."
  # Troca o conf para http-only se não houver certificados
  export NO_SSL=1
fi

# ── Build e subida ────────────────────────────────────────
log "Fazendo build da imagem Docker..."
$DC build --no-cache app

log "Subindo serviços..."
$DC up -d --remove-orphans

log "Aguardando healthcheck do app..."
RETRIES=20
until $DC ps app | grep -q "healthy" || [ $RETRIES -eq 0 ]; do
  sleep 3
  RETRIES=$((RETRIES - 1))
done

if [ $RETRIES -eq 0 ]; then
  warn "Healthcheck não confirmado — verificando logs:"
  $DC logs --tail=30 app
else
  log "App saudável!"
fi

# ── Limpeza ───────────────────────────────────────────────
log "Limpando imagens antigas..."
docker image prune -f --filter "label=com.docker.compose.project=velai-website" 2>/dev/null || true

log ""
log "✅ Deploy concluído!"
log "   Site: https://$(hostname -f)"
log "   Logs: $DC logs -f"
log "   Stop: $DC down"
