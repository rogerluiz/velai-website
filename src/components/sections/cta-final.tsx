"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TRUST_ITEMS = [
  "Grátis por 14 dias",
  "Windows 10+",
  "Cancele quando quiser",
];

export function CtaFinal() {
  return (
    <section className="relative bg-navy-dark overflow-hidden py-28 md:py-40">
      {/* Gold glow overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Primary glow — center-top */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-gold/10 blur-[140px]" />
        {/* Secondary glow — bottom edge */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full bg-gold/6 blur-[100px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-6"
        >
          {/* Badge */}
          <Badge variant="navy">Comece hoje</Badge>

          {/* Headline */}
          <h2
            className="font-display font-extrabold text-white leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
          >
            Baixe agora e organize seu negócio{" "}
            <span className="text-gold">em minutos.</span>
          </h2>

          {/* Subtext */}
          <p className="text-white/60 text-lg leading-relaxed max-w-xl">
            Instale o Velai, crie sua conta gratuita e veja a diferença no
            primeiro dia.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            <Button variant="primary" size="lg">
              <Download size={18} />
              Baixar para Windows
            </Button>
            <Button variant="outline" size="lg">
              Cadastrar conta
            </Button>
          </div>

          {/* Trust items */}
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-1">
            {TRUST_ITEMS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-1.5 text-white/50 text-sm"
              >
                <span className="text-white/40 text-xs">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
