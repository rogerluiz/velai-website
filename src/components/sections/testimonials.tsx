"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Testimonial {
  name: string;
  location: string;
  role: string;
  quote: string;
  initials: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ana Paula S.",
    location: "São Paulo, SP",
    role: "Produtora de velas aromáticas",
    initials: "AP",
    quote:
      "Antes eu vivia comprando insumo que já tinha em casa sem saber. Com o Velai, em menos de um mês já percebi a diferença no meu bolso.",
  },
  {
    name: "Marina C.",
    location: "Belo Horizonte, MG",
    role: "Artesã de sabonetes",
    initials: "MC",
    quote:
      "Finalmente consigo saber o custo real de cada sabonete que produzo. Ajustei meus preços e minha margem melhorou muito.",
  },
  {
    name: "Fernanda R.",
    location: "Curitiba, PR",
    role: "Criadora de aromatizadores",
    initials: "FR",
    quote:
      "Os alertas de estoque baixo salvaram minha entrega de Natal. Consegui repor tudo a tempo sem correria.",
  },
];

// Inline transitions per card (avoids Framer Motion Variants ease-tuple type issue)
const CARD_DELAYS = [0, 0.13, 0.26];

function StarRow() {
  return (
    <div className="flex gap-0.5" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-gold text-sm leading-none">
          ★
        </span>
      ))}
    </div>
  );
}

function Avatar({ initials }: { initials: string }) {
  return (
    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center shrink-0">
      <span className="text-navy text-sm font-bold leading-none">
        {initials}
      </span>
    </div>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: CARD_DELAYS[index] ?? 0,
        ease: "easeOut",
      }}
      className={cn(
        "bg-white/[0.04] border border-white/10 rounded-2xl p-6 backdrop-blur-sm",
        "flex flex-col gap-4",
      )}
    >
      <StarRow />

      <blockquote className="text-white/75 text-sm leading-relaxed flex-1">
        "{testimonial.quote}"
      </blockquote>

      <div className="flex items-center gap-3 pt-2 border-t border-white/8">
        <Avatar initials={testimonial.initials} />
        <div>
          <p className="text-white text-sm font-semibold leading-snug">
            {testimonial.name}
          </p>
          <p className="text-white/45 text-xs">{testimonial.role}</p>
          <p className="text-white/30 text-xs">{testimonial.location}</p>
        </div>
      </div>
    </motion.article>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-navy-dark overflow-hidden py-24 md:py-32"
    >
      {/* Gold glow — top right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-gold/10 blur-[130px]"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-gold/70 text-xs font-semibold tracking-widest uppercase mb-3">
            Quem já usa
          </p>
          <h2
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            Artesãos que transformaram seu negócio
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
