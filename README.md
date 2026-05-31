# Velai Website

Site institucional e de marketing do **Velai** — software de gestão de estoque para artesãos que produzem velas, sabonetes e aromatizadores.

🌐 **Produção:** [usevelai.app](https://usevelai.app)
📦 **App desktop:** [rogerluiz/velai](https://github.com/rogerluiz/velai/releases/latest)

---

## Visão geral

O site cumpre três objetivos:

1. **Converter** visitantes em downloads do app desktop
2. **Educar** sobre as funcionalidades e diferenciais do Velai
3. **Servir o link de download sempre atualizado** via GitHub Releases API (sem redeploy a cada versão)

---

## Stack

| Camada | Tecnologia | Versão |
|---|---|---|
| Framework | Next.js (App Router) | 16.x |
| UI Library | React | 19.x |
| Linguagem | TypeScript | 5.x |
| Estilização | Tailwind CSS v4 (CSS-first) | 4.x |
| Animações | Framer Motion | 12.x |
| Ícones | Lucide React | 1.x |
| Fontes | Inter + Bricolage Grotesque | Google Fonts |
| Deploy | Docker + Nginx (VPS HostGator) | — |

---

## Arquitetura

### Estrutura de pastas

```
velai-website/
├── src/
│   ├── app/
│   │   ├── globals.css        # Tokens do design system via @theme (Tailwind v4)
│   │   ├── layout.tsx         # Fontes, metadata, html lang="pt-BR"
│   │   └── page.tsx           # Página principal — orquestra todas as seções
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── navbar.tsx     # Header fixo com scroll-aware + menu mobile
│   │   │   └── footer.tsx     # Links, social, copyright
│   │   │
│   │   ├── sections/          # Uma seção = um componente
│   │   │   ├── hero.tsx             # Hero dark navy + app mockup animado
│   │   │   ├── how-it-works.tsx     # 3 passos: Baixar → Cadastrar → Usar
│   │   │   ├── pain-points.tsx      # 3 dores do público-alvo
│   │   │   ├── solution.tsx         # Apresentação do Velai + stats
│   │   │   ├── features.tsx         # 6 funcionalidades em grid
│   │   │   ├── for-who.tsx          # 4 perfis de cliente ideal
│   │   │   ├── testimonials.tsx     # 3 depoimentos (dark navy)
│   │   │   ├── download.tsx         # ⚡ Server Component — busca release GitHub
│   │   │   ├── download-cards.tsx   # Client Component — cards animados
│   │   │   ├── pricing.tsx          # 2 planos (Grátis 14d + Pro)
│   │   │   ├── faq.tsx              # Accordion interativo (5 perguntas)
│   │   │   └── cta-final.tsx        # CTA final com glow dourado
│   │   │
│   │   └── ui/
│   │       ├── button.tsx     # Botão com variantes: primary/secondary/ghost/outline
│   │       └── badge.tsx      # Badge com variantes de cor
│   │
│   └── lib/
│       ├── github.ts          # Fetcher tipado da GitHub Releases API
│       └── utils.ts           # cn() — clsx + tailwind-merge
│
├── nginx/
│   └── velai.conf             # Reverse proxy + SSL + cache de assets estáticos
│
├── scripts/
│   ├── setup-vps.sh           # Provisiona VPS do zero (Docker, UFW, Certbot)
│   └── deploy.sh              # Deploy automatizado via git pull
│
├── Dockerfile                 # Build multi-stage Node 22 Alpine
├── docker-compose.yml         # Orquestra app + nginx
├── .env.example               # Template de variáveis de ambiente
└── DEPLOY.md                  # Guia completo de deploy na VPS
```

### Fluxo de dados — Release dinâmica

A seção de download busca a versão mais recente do app diretamente da GitHub Releases API, sem necessidade de redeploy a cada nova versão publicada.

```
GitHub Releases API
  └─► src/lib/github.ts (getLatestRelease)
        └─► download.tsx  [Server Component, async]
              └─► download-cards.tsx  [Client Component, animações]
```

- **Revalidação:** a cada **1 hora** (`next: { revalidate: 3600 }`)
- **Fallback:** se a API falhar, o botão exibe estado de indisponível sem quebrar a página
- **Dado exibido:** versão, tamanho do arquivo, URL direta de download do `.exe`

### Design System

Definido em `src/app/globals.css` via `@theme` (Tailwind CSS v4 CSS-first).

| Token | Valor | Uso |
|---|---|---|
| `--color-gold` | `#F6B91A` | CTA, destaques, logo |
| `--color-gold-hover` | `#FF8A1F` | Hover de botões |
| `--color-navy` | `#161829` | Sidebar, fundos escuros |
| `--color-navy-dark` | `#0F1120` | Hero, seções escuras |
| `--color-canvas` | `#F5F7FB` | Fundo padrão do app |
| `--color-warm` | `#FFF8F4` | Seções com tom artesanal |
| `--font-display` | Bricolage Grotesque | Headlines |
| `--font-sans` | Inter | Corpo, labels, UI |

Tokens sincronizados com o `BRAND.md` e `DESIGN.md` do repositório principal (`rogerluiz/velai`).

### Ordem das seções na landing page

```
Navbar (fixo)
  │
  ├─ Hero                  # dark navy — headline + app mockup
  ├─ How It Works          # canvas — 3 passos com linha conectora
  ├─ Pain Points           # warm — 3 dores do cliente
  ├─ Solution              # white — apresentação + stats
  ├─ Features              # canvas — 6 features em grid 3 colunas
  ├─ For Who               # white — 4 perfis + caixa destaque
  ├─ Testimonials          # dark navy — 3 depoimentos
  ├─ Download              # dark navy — plataformas + requisitos
  ├─ Pricing               # canvas — plano Grátis + Pro
  ├─ FAQ                   # white — accordion 5 perguntas
  └─ CTA Final             # dark navy — chamada + botão download
  │
Footer (dark navy)
```

---

## Desenvolvimento local

### Pré-requisitos

- Node.js 22+
- npm 10+

### Instalação

```bash
git clone https://github.com/rogerluiz/velai-website.git
cd velai-website
npm install
```

### Variáveis de ambiente

```bash
cp .env.example .env.local
```

### Rodar em desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

### Build de produção

```bash
npm run build
npm start
```

### Verificação de tipos

```bash
npx tsc --noEmit
```

---

## Deploy na VPS

O deploy é feito via Docker + Nginx em uma VPS Ubuntu (HostGator).

Consulte o **[DEPLOY.md](./DEPLOY.md)** para o guia completo, incluindo:

- Configuração de DNS no GoDaddy (domínio `usevelai.app`) apontando para a VPS
- Provisionamento da VPS com Docker, UFW e Certbot (SSL automático)
- Subida dos containers com `docker compose up -d`
- Deploy de atualizações com `git pull` + rebuild

### Resumo rápido

```bash
# Na VPS (primeira vez)
sudo bash scripts/setup-vps.sh usevelai.app
docker compose up -d

# Atualizar após push
git pull origin main
docker compose build --no-cache app
docker compose up -d --no-deps app
```

---

## Relação com o repositório do app

Este repositório é o **site de marketing**. O app desktop em si está em:

- 📦 **App:** [github.com/rogerluiz/velai](https://github.com/rogerluiz/velai)
- O site consome a API de releases do app para exibir sempre a versão e o link de download corretos.

---

## Licença

Privado — todos os direitos reservados.
