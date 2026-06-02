import type { Metadata } from "next";
import { CheckCircle2, Zap, Bug } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Changelog | Velai",
  description: "Histórico de atualizações, melhorias e correções do Velai.",
};

const RELEASES = [
  {
    version: "v1.30.0",
    date: "22 de maio de 2025",
    highlight: "Mais recente",
    highlightColor: "bg-gold/15 text-gold border-gold/20",
    added: [
      "Backup automático de dados com histórico de 30 dias",
      "Filtros avançados no módulo de estoque (por fornecedor, validade e categoria)",
      "Exportação de relatórios em .xlsx além de PDF",
    ],
    improved: [
      "Performance no carregamento inicial — 40% mais rápido",
      "Interface de cadastro de insumos completamente redesenhada",
    ],
    fixed: [
      "Erro ao salvar fórmulas com caracteres especiais no nome",
      "Cálculo incorreto de custo quando insumo tem mais de uma unidade de medida",
    ],
  },
  {
    version: "v1.28.0",
    date: "10 de abril de 2025",
    highlight: null,
    highlightColor: "",
    added: [
      "Calculadora de custo por lote integrada ao módulo de produção",
      "Alertas de estoque baixo com limite personalizável por insumo",
      "Suporte a múltiplas unidades de medida por insumo (g, ml, un, kg, L)",
    ],
    improved: [
      "Módulo de produção redesenhado com novo fluxo de 3 etapas",
      "Notificações in-app mais claras e com ações diretas",
    ],
    fixed: [
      "Quantidade negativa no estoque após estorno de produção",
      "Tela de login não carregando em conexões lentas",
    ],
  },
  {
    version: "v1.25.0",
    date: "1 de março de 2025",
    highlight: null,
    highlightColor: "",
    added: [
      "Relatório de consumo mensal por insumo",
      "Modo escuro automático (segue preferência do sistema)",
      "Múltiplos usuários no mesmo plano Pro (até 3 acessos)",
    ],
    improved: [
      "Sincronização entre dispositivos mais estável e rápida",
      "Busca de insumos agora aceita código e nome simultâneo",
    ],
    fixed: [
      "Foto do produto sumindo após atualização de registro",
      "Data de validade de lote não sendo salva corretamente",
    ],
  },
  {
    version: "v1.20.0",
    date: "14 de fevereiro de 2025",
    highlight: null,
    highlightColor: "",
    added: [
      "Módulo de fornecedores com histórico de compras",
      "Leitura de código de barras via câmera para entrada de insumos",
      "Campos personalizados nas fichas de insumos",
    ],
    improved: [
      "Exportação para PDF com layout profissional atualizado",
      "App 30% mais leve — instalador e uso de memória reduzidos",
    ],
    fixed: ["9 correções menores reportadas pela comunidade no fórum"],
  },
  {
    version: "v1.15.0",
    date: "5 de janeiro de 2025",
    highlight: null,
    highlightColor: "",
    added: [
      "Cálculo automático de margem de lucro por produto",
      "Tutoriais interativos in-app para novos usuários",
      "Histórico de preços de insumos com gráfico de variação",
    ],
    improved: [
      "Onboarding simplificado — configure tudo em menos de 10 minutos",
    ],
    fixed: [
      "12 bugs reportados via feedback in-app",
      "Impressão de etiquetas com margens incorretas",
    ],
  },
  {
    version: "v1.0.0",
    date: "3 de outubro de 2024",
    highlight: "Lançamento",
    highlightColor: "bg-success/10 text-success border-success/20",
    added: [
      "Controle de estoque de insumos (entradas, saídas, saldo em tempo real)",
      "Gerenciamento de fórmulas e receitas de produção",
      "Histórico completo de lotes produzidos",
      "Dashboard com visão geral do negócio",
      "Exportação básica de relatórios em PDF",
    ],
    improved: [],
    fixed: [],
  },
];

export default function ChangelogPage() {
  return (
    <PageShell
      hero={{
        eyebrow: "Produto",
        title: "Changelog",
        description:
          "Todas as novidades, melhorias e correções do Velai — organizadas por versão.",
      }}
    >
      <div className="max-w-3xl mx-auto px-6 py-16 flex flex-col gap-14">
        {RELEASES.map((release) => (
          <article key={release.version}>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-display font-bold text-navy text-xl">
                {release.version}
              </span>
              {release.highlight && (
                <span
                  className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${release.highlightColor}`}
                >
                  {release.highlight}
                </span>
              )}
              <span className="text-slate-400 text-sm ml-auto">
                {release.date}
              </span>
            </div>

            <div className="pl-4 border-l border-divider flex flex-col gap-6">
              {release.added.length > 0 && (
                <ChangeSection
                  icon={<CheckCircle2 size={15} className="text-success" />}
                  label="Adicionado"
                  color="text-success"
                  items={release.added}
                />
              )}
              {release.improved.length > 0 && (
                <ChangeSection
                  icon={<Zap size={15} className="text-gold" />}
                  label="Melhorado"
                  color="text-gold"
                  items={release.improved}
                />
              )}
              {release.fixed.length > 0 && (
                <ChangeSection
                  icon={<Bug size={15} className="text-slate-300" />}
                  label="Corrigido"
                  color="text-slate-300"
                  items={release.fixed}
                />
              )}
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}

function ChangeSection({
  icon,
  label,
  color,
  items,
}: {
  icon: React.ReactNode;
  label: string;
  color: string;
  items: string[];
}) {
  return (
    <div>
      <div
        className={`flex items-center gap-2 font-semibold text-sm mb-2 ${color}`}
      >
        {icon}
        {label}
      </div>
      <ul className="flex flex-col gap-1.5">
        {items.map((item) => (
          <li
            key={item}
            className="text-slate-500 text-sm leading-relaxed pl-1"
          >
            — {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
