"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface PlanFeature {
  text: string;
}

const FREE_FEATURES: PlanFeature[] = [
  { text: "Até 50 insumos cadastrados" },
  { text: "Controle de produtos acabados" },
  { text: "Alertas de estoque básicos" },
  { text: "Suporte por e-mail" },
];

const PRO_FEATURES: PlanFeature[] = [
  { text: "Insumos ilimitados" },
  { text: "Receitas e fórmulas" },
  { text: "Cálculo de custo por produto" },
  { text: "Relatórios completos" },
  { text: "Alertas inteligentes avançados" },
  { text: "Suporte prioritário" },
];

function FeatureItem({ text, dark = false }: { text: string; dark?: boolean }) {
  return (
    <li className="flex items-start gap-2.5">
      <CheckCircle2
        size={16}
        className={cn("shrink-0 mt-0.5", dark ? "text-gold" : "text-success")}
      />
      <span
        className={cn("text-sm", dark ? "text-white/60" : "text-slate-500")}
      >
        {text}
      </span>
    </li>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="bg-canvas py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-3">
            Preços
          </p>
          <h2
            className="font-display font-bold text-navy leading-tight mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            Simples, transparente, sem surpresas
          </h2>
          <p className="text-slate-500 text-base">
            Comece grátis. Faça upgrade quando precisar.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Free card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
            className="bg-surface border border-divider rounded-2xl p-8 flex flex-col"
          >
            <div className="mb-6">
              <h3 className="text-navy font-display font-bold text-xl mb-1">
                Grátis
              </h3>
              <p className="text-slate-500 text-sm">
                Experimente sem compromisso
              </p>
            </div>

            <div className="mb-6">
              <span className="text-navy font-display font-extrabold text-4xl">
                R$ 0
              </span>
              <span className="text-slate-500 text-sm ml-2">/ 14 dias</span>
            </div>

            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {FREE_FEATURES.map((f) => (
                <FeatureItem key={f.text} text={f.text} dark={false} />
              ))}
            </ul>

            <Button variant="secondary" size="md" className="w-full">
              Começar grátis
            </Button>
          </motion.div>

          {/* Pro card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.27, ease: "easeOut" }}
            className="relative bg-navy-dark border border-gold/20 rounded-2xl p-8 flex flex-col"
          >
            {/* "Mais popular" badge */}
            <span className="absolute top-5 right-5 px-2.5 py-1 rounded-full bg-gold text-navy text-xs font-bold leading-none">
              Mais popular
            </span>

            <div className="mb-6">
              <h3 className="text-white font-display font-bold text-xl mb-1">
                Pro
              </h3>
              <p className="text-white/50 text-sm">
                Para quem quer crescer de verdade
              </p>
            </div>

            <div className="mb-6">
              <span className="text-gold font-display font-extrabold text-4xl">
                R$ 29
              </span>
              <span className="text-white/40 text-sm ml-2">/ mês</span>
            </div>

            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {PRO_FEATURES.map((f) => (
                <FeatureItem key={f.text} text={f.text} dark={true} />
              ))}
            </ul>

            <Button variant="primary" size="md" className="w-full">
              Assinar agora
            </Button>
          </motion.div>
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center text-slate-500 text-sm mt-8"
        >
          Preços em BRL. Cancele a qualquer momento. Sem taxas ocultas.
        </motion.p>
      </div>
    </section>
  );
}
