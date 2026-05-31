#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────
# setup-vps.sh — Prepara VPS Ubuntu/Debian para o Velai
# Execute uma vez como root: sudo bash scripts/setup-vps.sh
# ─────────────────────────────────────────────────────────
set -euo pipefail

DOMAIN="${1:-}"

[ "$(id -u)" -eq 0 ] || { echo "Execute como root: sudo bash $0 <seu-dominio.com>"; exit 1; }
[ -n "$DOMAIN" ]      || { echo "Uso: sudo bash $0 <seu-dominio.com>"; exit 1; }

echo "▶ Atualizando pacotes..."
apt-get update -qq && apt-get upgrade -y -qq

echo "▶ Instalando dependências..."
apt-get install -y -qq \
  curl wget git ufw certbot \
  ca-certificates gnupg lsb-release

# ── Docker ───────────────────────────────────────────────
if ! command -v docker &>/dev/null; then
  echo "▶ Instalando Docker..."
  curl -fsSL https://get.docker.com | sh
  systemctl enable --now docker
fi

# ── Docker Compose plugin ─────────────────────────────────
if ! docker compose version &>/dev/null; then
  echo "▶ Instalando Docker Compose plugin..."
  DOCKER_CONFIG=${DOCKER_CONFIG:-$HOME/.docker}
  mkdir -p "$DOCKER_CONFIG/cli-plugins"
  curl -SL "https://github.com/docker/compose/releases/latest/download/docker-compose-linux-$(uname -m)" \
    -o "$DOCKER_CONFIG/cli-plugins/docker-compose"
  chmod +x "$DOCKER_CONFIG/cli-plugins/docker-compose"
fi

# ── Firewall ──────────────────────────────────────────────
echo "▶ Configurando firewall (UFW)..."
ufw --force reset
ufw default deny incoming
ufw default allow outgoing
ufw allow ssh
ufw allow 80/tcp
ufw allow 443/tcp
ufw --force enable

# ── Diretório da aplicação ────────────────────────────────
echo "▶ Criando /opt/velai-website..."
mkdir -p /opt/velai-website/nginx/ssl

# ── SSL com Certbot ───────────────────────────────────────
echo "▶ Obtendo certificado SSL para $DOMAIN..."
certbot certonly --standalone \
  --non-interactive \
  --agree-tos \
  --email "admin@$DOMAIN" \
  -d "$DOMAIN" \
  -d "www.$DOMAIN" || echo "⚠ Certbot falhou — configure o DNS antes de rodar novamente"

# Copia certs para o diretório do projeto
if [ -f "/etc/letsencrypt/live/$DOMAIN/fullchain.pem" ]; then
  cp "/etc/letsencrypt/live/$DOMAIN/fullchain.pem" /opt/velai-website/nginx/ssl/
  cp "/etc/letsencrypt/live/$DOMAIN/privkey.pem"   /opt/velai-website/nginx/ssl/
  echo "✅ Certificados copiados para /opt/velai-website/nginx/ssl/"
fi

# ── Renovação automática do SSL ────────────────────────────
echo "▶ Configurando renovação automática SSL..."
(crontab -l 2>/dev/null; echo "0 3 * * * certbot renew --quiet && docker compose -f /opt/velai-website/docker-compose.yml restart nginx") | crontab -

echo ""
echo "✅ VPS pronta!"
echo ""
echo "Próximos passos:"
echo "  1. Clone o repositório em /opt/velai-website"
echo "  2. Ajuste o domínio em nginx/velai.conf"
echo "  3. Execute: cd /opt/velai-website && docker compose up -d"
