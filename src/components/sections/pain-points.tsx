"use client";

import { motion } from "framer-motion";
import { PackageX, HelpCircle, TrendingDown } from "lucide-react";

const PAINS = [
  {
    icon: PackageX,
    title: "Comprei insumo que já tinha em casa",
    description:
      "Sem controle claro, você compra parafina, óleo ou pote sem saber o que já tem em estoque. Resultado: dinheiro parado e desperdício.",
    color: "text-danger",
    bg: "bg-danger-light",
  },
  {
    icon: HelpCircle,
    title: "Não sei o custo real dos meus produtos",
    description:
      "Precificar no chute significa vender com margem negativa sem nem perceber. O preço que você cobra pode estar pagando só o seu tempo — e nada mais.",
    color: "text-warning",
    bg: "bg-warning-light",
  },
  {
    icon: TrendingDown,
    title: "Faltou insumo no meio da produção",
    description:
      "Aquela situação que trava tudo: lote a metade, entrega atrasada e cliente esperando. Um alerta de estoque baixo teria evitado tudo isso.",
    color: "text-gold-hover",
    bg: "bg-gold-light",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function PainPoints() {
  return (
    <section className="bg-warm py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold-hover text-sm font-semibold tracking-widest uppercase mb-3">
            Você se identifica?
          </p>
          <h2
            className="font-display font-bold text-navy leading-tight tracking-tight"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
          >
            A realidade de quem produz
            <br />
            sem controle
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PAINS.map((pain, i) => {
            const Icon = pain.icon;
            return (
              <motion.div
                key={pain.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="bg-surface rounded-2xl p-7 border border-divider shadow-[0_2px_16px_rgba(32,35,52,0.06)] hover:shadow-[0_6px_24px_rgba(32,35,52,0.10)] transition-shadow duration-300"
              >
                <div className={`inline-flex p-3 rounded-xl ${pain.bg} mb-5`}>
                  <Icon size={22} className={pain.color} />
                </div>
                <h3 className="text-navy font-semibold text-lg mb-3 leading-snug">
                  {pain.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {pain.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-slate-500 mt-12 text-base"
        >
          Você não está sozinha(o).{" "}
          <span className="text-navy font-semibold">
            É exatamente para isso que o Velai existe.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
