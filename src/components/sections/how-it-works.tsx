"use client";

import { motion } from "framer-motion";
import { Download, UserPlus, LayoutDashboard } from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: Download,
    title: "Baixe e instale",
    description:
      "Faça o download do instalador para Windows. A instalação leva menos de 2 minutos e não requer configurações técnicas.",
    accent: "text-gold",
    bg: "bg-gold-light",
  },
  {
    step: "02",
    icon: UserPlus,
    title: "Crie sua conta gratuita",
    description:
      "Abra o Velai, informe seu e-mail e crie uma senha. Pronto — 14 dias de acesso completo, sem cartão de crédito.",
    accent: "text-success",
    bg: "bg-success-light",
  },
  {
    step: "03",
    icon: LayoutDashboard,
    title: "Organize seu estoque",
    description:
      "Cadastre seus insumos, defina alertas de estoque mínimo e tenha controle total da sua produção artesanal.",
    accent: "text-gold-hover",
    bg: "bg-warning-light",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-canvas py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Como funciona
          </p>
          <h2
            className="font-display font-bold text-navy leading-tight tracking-tight"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
          >
            Do download ao controle total
            <br />
            em 3 passos
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-divider" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.15 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon circle */}
                  <div className="relative mb-6 z-10">
                    <div
                      className={`w-20 h-20 rounded-2xl ${step.bg} flex items-center justify-center shadow-sm border border-divider`}
                    >
                      <Icon size={28} className={step.accent} />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center shadow">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-navy font-semibold text-lg mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
