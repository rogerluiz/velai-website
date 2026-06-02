#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# Velai — Server environment setup (execute UMA VEZ no VPS)
#
# Usage: bash scripts/server-setup.sh SEU_IP_PUBLICO
#
# O que faz:
#   1. Migra o processo PM2 "velai" atual para "velai-prod"
#   2. Cria diretórios /var/www/velai-{prod,qa,dev}
#   3. Instala configs Nginx para qa e dev subdomínios
#   4. Emite certificados SSL para qa.usevelai.app e dev.usevelai.app
#   5. Recarrega o Nginx
#
# Pré-requisitos:
#   - DNS: adicionar A records qa.usevelai.app e dev.usevelai.app → 143.95.208.156
#   - Nginx e Certbot instalados (já estão)
# ─────────────────────────────────────────────────────────────────────────────
set -euo pipefail

ALLOWED_IP="${1:?Uso: bash server-setup.sh SEU_IP_PUBLICO}"
REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "──────────────────────────────────────"
echo " Velai — Server Setup"
echo " IP autorizado: $ALLOWED_IP"
echo "──────────────────────────────────────"

# ── 1. Criar diretórios ──────────────────────────────────────────────────────
echo "▶ Criando diretórios..."
mkdir -p /var/www/velai-prod
mkdir -p /var/www/velai-qa
mkdir -p /var/www/velai-dev

# ── 2. Migrar processo PM2 existente ────────────────────────────────────────
echo "▶ Migrando processo PM2..."

# Se o processo antigo "velai" existir, migra o diretório para velai-prod
if pm2 describe velai > /dev/null 2>&1; then
  echo "  Processo 'velai' encontrado — migrando para 'velai-prod'..."

  # Descobre o diretório atual do processo
  OLD_DIR=$(pm2 jlist | python3 -c "
import sys, json
procs = json.load(sys.stdin)
for p in procs:
  if p['name'] == 'velai':
    print(p.get('pm2_env', {}).get('cwd', ''))
    break
" 2>/dev/null || echo "")

  if [ -n "$OLD_DIR" ] && [ -d "$OLD_DIR" ]; then
    echo "  Copiando $OLD_DIR → /var/www/velai-prod"
    rsync -a --exclude='.git' --exclude='node_modules' "$OLD_DIR/" /var/www/velai-prod/
  fi

  pm2 delete velai || true
  pm2 save
fi

# ── 3. Atualizar config Nginx do prod ────────────────────────────────────────
echo "▶ Atualizando Nginx para prod (127.0.0.1:3000)..."

# Corrige o proxy_pass do velai.conf de "http://app:3000" para localhost
NGINX_PROD="/etc/nginx/conf.d/velai.conf"
if [ -f "$NGINX_PROD" ]; then
  sed -i 's|http://app:3000|http://127.0.0.1:3000|g' "$NGINX_PROD"
  echo "  $NGINX_PROD atualizado."
fi

# ── 4. Instalar configs de QA e Dev ─────────────────────────────────────────
echo "▶ Instalando configs Nginx para qa e dev..."

install_nginx_http_only() {
  local SUBDOMAIN="$1"   # ex: qa
  local PORT="$2"         # ex: 3001
  local DEST="/etc/nginx/conf.d/${SUBDOMAIN}.conf"
  local FQDN="${SUBDOMAIN}.usevelai.app"

  # Instala SOMENTE o bloco HTTP — certbot --nginx adicionará o SSL depois
  cat > "$DEST" << NGINXEOF
server {
    listen 80;
    server_name $FQDN;

    # Restrição de IP
    allow $ALLOWED_IP;
    deny  all;

    location / {
        proxy_pass         http://127.0.0.1:$PORT;
        proxy_http_version 1.1;
        proxy_set_header   Host              \$host;
        proxy_set_header   X-Real-IP         \$remote_addr;
        proxy_set_header   X-Forwarded-For   \$proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto \$scheme;
    }
}
NGINXEOF

  echo "  Instalado (HTTP only): $DEST"
}

install_nginx_http_only "qa"  "3001"
install_nginx_http_only "dev" "3002"

# ── 5. Testar config Nginx ───────────────────────────────────────────────────
echo "▶ Testando configuração Nginx..."
nginx -t

# ── 6. Emitir certificados SSL ───────────────────────────────────────────────
echo "▶ Emitindo certificados SSL..."
echo "  ATENÇÃO: os registros DNS de qa.usevelai.app e dev.usevelai.app"
echo "  devem já apontar para este servidor antes de continuar."
echo ""
read -rp "  DNS já propagado? (s/N): " DNS_READY

if [[ "$DNS_READY" =~ ^[Ss]$ ]]; then
  # Remove bloco SSL temporariamente para certbot conseguir validar via HTTP
  # (certbot --nginx cuida disso automaticamente)
  certbot --nginx -d qa.usevelai.app  --non-interactive --agree-tos \
    --email admin@usevelai.app --redirect || echo "  AVISO: certbot qa falhou"

  certbot --nginx -d dev.usevelai.app --non-interactive --agree-tos \
    --email admin@usevelai.app --redirect || echo "  AVISO: certbot dev falhou"
else
  echo "  Pulando emissão de SSL. Execute depois:"
  echo "    certbot --nginx -d qa.usevelai.app"
  echo "    certbot --nginx -d dev.usevelai.app"
fi

# ── 7. Recarregar Nginx ──────────────────────────────────────────────────────
echo "▶ Recarregando Nginx..."
nginx -t && systemctl reload nginx

echo ""
echo "──────────────────────────────────────"
echo "✅ Setup concluído!"
echo ""
echo "Próximos passos:"
echo "  1. No GitHub: crie os branches 'qa' e 'develop'"
echo "  2. No GitHub Settings → Environments: crie 'prod', 'qa', 'dev'"
echo "  3. Adicione os records DNS no GoDaddy:"
echo "       A  qa.usevelai.app   → 143.95.208.156"
echo "       A  dev.usevelai.app  → 143.95.208.156"
echo "  4. Faça push em 'develop' para testar o pipeline"
echo "──────────────────────────────────────"
