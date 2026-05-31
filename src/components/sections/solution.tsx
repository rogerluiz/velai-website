"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const STATS = [
  { value: "100%", label: "focado em artesãos" },
  { value: "0", label: "planilhas necessárias" },
  { value: "14 dias", label: "grátis para testar" },
];

export function Solution() {
  return (
    <section className="bg-surface py-24 border-y border-divider">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
              A solução
            </p>
            <h2
              className="font-display font-bold text-navy leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
            >
              Conheça o Velai
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              O Velai é um software de gestão de estoque pensado do zero para
              quem produz velas, sabonetes e aromatizadores artesanais.
            </p>
            <p className="text-slate-500 text-base leading-relaxed mb-10">
              Sem planilhas complicadas. Sem curva de aprendizado longa. Só a
              organização que você precisa para crescer com confiança — direto
              no computador ou celular.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.15 + i * 0.1 }}
                  className="text-center"
                >
                  <p className="text-gold font-display font-extrabold text-2xl md:text-3xl mb-1">
                    {stat.value}
                  </p>
                  <p className="text-slate-500 text-xs leading-tight">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — logo + visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-gold/8 blur-3xl scale-75" />
              <div className="relative flex flex-col items-center gap-6">
                {/* Logo mark big */}
                <div className="p-8 rounded-3xl bg-navy-dark shadow-2xl border border-white/5">
                  <Image
                    src="/logo.svg"
                    alt="Velai"
                    width={80}
                    height={116}
                    className="drop-shadow-[0_0_24px_rgba(246,185,26,0.4)]"
                  />
                </div>
                {/* Tagline chip */}
                <p className="text-navy-mid font-semibold text-sm bg-gold-light px-4 py-2 rounded-full border border-gold/30">
                  Feito para o seu negócio artesanal ✨
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
