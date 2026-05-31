"use client";

import { motion, type Variants } from "framer-motion";
import { Flame, Droplets, Wind, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const PROFILES = [
  {
    icon: Flame,
    title: "Produz velas artesanais",
    description:
      "Velas aromáticas, decorativas, de soja, de parafina. Se você produz, o Velai cuida do seu estoque.",
  },
  {
    icon: Droplets,
    title: "Faz sabonetes e cosméticos",
    description:
      "Sabonetes artesanais, hidratantes, óleos corporais. Controle todos os insumos de cada linha.",
  },
  {
    icon: Wind,
    title: "Cria aromatizadores",
    description:
      "Difusores, sachês, spray de ambiente. Gerencie sua coleção de fragrâncias com facilidade.",
  },
  {
    icon: TrendingUp,
    title: "Quer profissionalizar o negócio",
    description:
      "Você sente que está crescendo mas a bagunça no estoque trava tudo. Velai é o primeiro passo para escalar.",
  },
];

const fadeUp: Variants = {
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

export function ForWho() {
  return (
    <section id="for-who" className="bg-surface py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold-hover text-sm font-semibold tracking-widest uppercase mb-3">
            Para quem é
          </p>
          <h2
            className="font-display font-bold text-navy leading-tight tracking-tight"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
          >
            O Velai foi feito para você que...
          </h2>
        </motion.div>

        {/* Profile cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {PROFILES.map((profile, i) => {
            const Icon = profile.icon;
            return (
              <motion.div
                key={profile.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className={cn(
                  "bg-surface rounded-2xl p-7 border border-divider",
                  "shadow-[0_2px_16px_rgba(32,35,52,0.06)]",
                  "hover:shadow-[0_6px_24px_rgba(32,35,52,0.10)]",
                  "transition-shadow duration-300",
                )}
              >
                <div className="inline-flex p-3 rounded-xl bg-navy mb-5">
                  <Icon size={22} className="text-gold" />
                </div>
                <h3 className="text-navy font-semibold text-lg mb-2 leading-snug">
                  {profile.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {profile.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gold-light rounded-2xl p-6 border border-gold/30 text-center"
        >
          <p className="text-navy font-medium text-base leading-relaxed">
            Se você se identificou com pelo menos um desses perfis,{" "}
            <br className="hidden sm:block" />o Velai foi feito para você.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
