import type { Metadata } from "next";
import { Loader2, Clock, HelpCircle } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Roadmap | Velai",
  description:
    "Veja o que estamos construindo, o que está planejado e o que estamos considerando para o futuro do Velai.",
};

const COLUMNS = [
  {
    key: "building",
    label: "Em desenvolvimento",
    icon: Loader2,
    iconClass: "text-gold animate-spin",
    cardBorder: "border-gold/15",
    badgeClass: "bg-gold/10 text-gold border-gold/20",
    items: [
      {
        title: "App Mobile (iOS + Android)",
        description:
          "Consulte e atualize seu estoque pelo celular, com leitura de código de barras pela câmera.",
        eta: "Q3 2025",
      },
      {
        title: "Alertas via WhatsApp",
        description:
          "Receba notificações de estoque crítico e confirmações de produção direto no WhatsApp.",
        eta: "Q3 2025",
      },
    ],
  },
  {
    key: "planned",
    label: "Planejado",
    icon: Clock,
    iconClass: "text-slate-300",
    cardBorder: "border-divider",
    badgeClass: "bg-slate-100 text-slate-500 border-slate-200",
    items: [
      {
        title: "Nota Fiscal Simplificada",
        description:
          "Emita NF-e para vendas diretamente pelo Velai, integrado com NFe.io.",
        eta: "Q4 2025",
      },
      {
        title: "Integração com Lojas Virtuais",
        description:
          "Sincronize seu estoque automaticamente com Shopify, Nuvemshop e Bling.",
        eta: "Q4 2025",
      },
      {
        title: "Relatórios Avançados",
        description:
          "Dashboards com evolução de produção, custos e margem de lucro ao longo do tempo.",
        eta: "Q1 2026",
      },
      {
        title: "API Pública",
        description:
          "Conecte o Velai a qualquer sistema com nossa API REST completamente documentada.",
        eta: "Q1 2026",
      },
    ],
  },
  {
    key: "considering",
    label: "Considerando",
    icon: HelpCircle,
    iconClass: "text-slate-400",
    cardBorder: "border-slate-100",
    badgeClass: "bg-slate-50 text-slate-400 border-slate-200",
    items: [
      {
        title: "Previsão de Demanda com IA",
        description:
          "Sugestões de quantidade a produzir baseadas no histórico de vendas e sazonalidade.",
        eta: null,
      },
      {
        title: "Marketplace para Artesãos",
        description:
          "Vitrine integrada para expor seus produtos para compradores e revendedores parceiros.",
        eta: null,
      },
      {
        title: "Integração com Fornecedores",
        description:
          "Faça pedidos de insumos diretamente pelo Velai em fornecedores homologados.",
        eta: null,
      },
    ],
  },
];

export default function RoadmapPage() {
  return (
    <PageShell
      hero={{
        eyebrow: "Produto",
        title: "Roadmap",
        description:
          "O que estamos construindo agora, o que vem a seguir, e o que estamos pensando para o futuro.",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-slate-400 text-xs text-center mb-12 max-w-lg mx-auto">
          Este roadmap é indicativo e pode mudar. Priorizamos com base no
          feedback dos nossos usuários — deixe sua sugestão em{" "}
          <a
            href="/contato"
            className="text-gold/70 hover:text-gold underline-offset-2 underline transition-colors"
          >
            contato
          </a>
          .
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {COLUMNS.map((col) => (
            <div key={col.key}>
              <div className="flex items-center gap-2 mb-5">
                <col.icon size={16} className={col.iconClass} />
                <h2 className="text-slate-700 font-semibold text-sm">
                  {col.label}
                </h2>
                <span className="ml-auto text-slate-400 text-xs font-medium bg-slate-100 px-2 py-0.5 rounded-full">
                  {col.items.length}
                </span>
              </div>

              <div className="flex flex-col gap-3">
                {col.items.map((item) => (
                  <div
                    key={item.title}
                    className={`p-4 rounded-2xl bg-surface border ${col.cardBorder}`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-slate-800 font-semibold text-sm leading-snug">
                        {item.title}
                      </h3>
                      {item.eta && (
                        <span
                          className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded-full border ${col.badgeClass}`}
                        >
                          {item.eta}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
