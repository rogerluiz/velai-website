# Velai Website — Deploy na VPS

## Pré-requisitos

- VPS Ubuntu 22.04+ (HostGator)
- Domínio `usevelai.app` com DNS apontando para o IP da VPS (ver seção abaixo)
- Acesso SSH root

---

## 0. Configurar DNS no GoDaddy → HostGator VPS

**Antes de tudo**, o domínio precisa apontar para o IP da sua VPS.

### Pegar o IP da VPS no painel HostGator

1. Acesse o painel HostGator → **VPS**
2. Anote o **IP público** da sua VPS (ex: `123.45.67.89`)

### Configurar no GoDaddy

1. Acesse [https://dcc.godaddy.com](https://dcc.godaddy.com) → **Meus Produtos**
2. Clique em **DNS** ao lado de `usevelai.app`
3. Na seção **Registros DNS**, adicione/atualize:

| Tipo | Nome | Valor         | TTL |
|------|------|---------------|-----|
| A    | `@`  | `IP_DA_VPS`   | 600 |
| A    | `www`| `IP_DA_VPS`   | 600 |

4. Salve e aguarde propagação: **5–30 minutos** (até 48h em casos extremos)

### Verificar propagação DNS

```bash
# No seu computador local
nslookup usevelai.app
# ou
dig usevelai.app A +short
```

Quando retornar o IP correto da VPS, pode prosseguir.

---

## 1. Preparar a VPS (rodar uma vez)

```bash
# Conecte via SSH
ssh root@IP_DA_VPS

# Clone o repositório na VPS
git clone https://github.com/seu-usuario/velai-website.git /opt/velai-website
cd /opt/velai-website

# Execute o setup (instala Docker, UFW, Certbot + SSL)
sudo bash scripts/setup-vps.sh usevelai.app
```

O script automaticamente:
- Instala Docker e Docker Compose
- Configura firewall (portas 22, 80, 443)
- Obtém certificado SSL para `usevelai.app` e `www.usevelai.app` via Let's Encrypt
- Agenda renovação automática do SSL

---

## 2. Subir a aplicação

```bash
cd /opt/velai-website
docker compose up -d
```

Aguarde o healthcheck (~15 segundos) e acesse **https://usevelai.app**.

---

## Deploy de atualizações

```bash
# Na VPS
cd /opt/velai-website
git pull origin main
docker compose build --no-cache app
docker compose up -d --no-deps app
```

Ou use o script automatizado:

```bash
export REPO_URL=git@github.com:seu-usuario/velai-website.git
bash scripts/deploy.sh
```

---

## Comandos úteis

```bash
# Ver status dos containers
docker compose ps

# Acompanhar logs em tempo real
docker compose logs -f

# Reiniciar apenas o app (sem downtime do nginx)
docker compose restart app

# Parar tudo
docker compose down

# Ver uso de recursos
docker stats
```

---

## Estrutura de arquivos de deploy

```
velai-website/
├── Dockerfile              ← build multi-stage (deps → builder → runner)
├── docker-compose.yml      ← orquestra app + nginx
├── nginx/
│   ├── velai.conf          ← reverse proxy + SSL + cache (domínio: usevelai.app)
│   └── ssl/
│       ├── fullchain.pem   ← certificado (gerado pelo setup)
│       └── privkey.pem     ← chave privada
└── scripts/
    ├── setup-vps.sh        ← provisionamento inicial da VPS
    └── deploy.sh           ← deploy automatizado via git
```

---

## Variáveis de ambiente

Crie um `.env.production` na raiz:

```bash
cp .env.example .env.production
# edite com seus valores reais
```

---

## Renovação SSL

O script de setup cria um cron automático. Para renovar manualmente:

```bash
certbot renew
docker compose restart nginx
```

---

## Notas

- O app roda na porta `3000` internamente — não exposta à internet, só ao nginx
- Build com `output: "standalone"` do Next.js → imagem final ~150MB
- Healthcheck garante que o nginx só serve tráfego quando o app está pronto
- TTL 600s no DNS permite propagação mais rápida durante a configuração inicial
