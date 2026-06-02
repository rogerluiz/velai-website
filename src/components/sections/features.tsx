"use client";

import { motion, type Variants } from "framer-motion";
import {
  Package,
  Archive,
  Bell,
  FlaskConical,
  Calculator,
  BarChart2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    icon: Package,
    title: "Controle de Insumos",
    description:
      "Saiba exatamente quanto você tem de cada matéria-prima em tempo real. Parafina, óleos, pavios, potes e muito mais.",
  },
  {
    icon: Archive,
    title: "Produtos Acabados",
    description:
      "Acompanhe o que foi produzido, o que está disponível para venda e o que já saiu do estoque.",
  },
  {
    icon: Bell,
    title: "Alertas Inteligentes",
    description:
      "Receba avisos antes de ficar sem insumos essenciais. Nunca mais seja pego de surpresa no meio de uma produção.",
  },
  {
    icon: FlaskConical,
    title: "Receitas e Fórmulas",
    description:
      "Registre as fórmulas dos seus produtos e calcule automaticamente o consumo de insumos por lote.",
  },
  {
    icon: Calculator,
    title: "Controle de Custos",
    description:
      "Entenda o custo real de cada produto e precifique com segurança. Chega de vender no prejuízo sem saber.",
  },
  {
    icon: BarChart2,
    title: "Relatórios Simples",
    description:
      "Visualize o histórico de produção, consumo e movimentações de estoque de forma clara e sem complicação.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function Features() {
  return (
    <section id="features" className="bg-canvas py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Tudo que você precisa
          </p>
          <h2
            className="font-display font-bold text-navy leading-tight tracking-tight"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
          >
            Funcionalidades pensadas
            <br />
            para o artesão
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className={cn(
                  "bg-surface rounded-2xl p-6 border border-divider",
                  "shadow-[0_2px_16px_rgba(32,35,52,0.06)]",
                  "hover:shadow-[0_6px_24px_rgba(32,35,52,0.12)]",
                  "transition-shadow duration-300",
                )}
              >
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-gold-muted)] mb-5">
                  <Icon size={22} className="text-gold" />
                </div>
                <h3 className="text-navy font-semibold text-lg mb-2 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
