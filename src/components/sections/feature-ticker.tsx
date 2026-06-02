import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const ITEMS = [
  "Controle de Insumos",
  "Receitas e Fórmulas",
  "Custo por Produto",
  "Alertas Inteligentes",
  "Lotes de Produção",
  "Relatórios Detalhados",
  "Produtos Acabados",
  "Gestão de Fornecedores",
  "Backup Automático",
  "Multi-dispositivos",
  "Exportação em PDF",
  "Histórico de Movimentações",
];

export function FeatureTicker({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-navy border-y border-white/5 py-3.5",
        className,
      )}
      aria-hidden
    >
      {/* left fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-navy to-transparent" />
      {/* right fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-navy to-transparent" />

      {/* Track — duplicated so the loop is seamless */}
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 mx-2 px-4 py-1.5 rounded-full border border-white/[0.12] bg-white/[0.06]"
          >
            <Check size={12} className="text-gold shrink-0" strokeWidth={2.5} />
            <span className="text-sm font-medium text-white/80 tracking-wide">
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
