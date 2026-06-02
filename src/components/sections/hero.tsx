"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

/* ── Mini UI mockup showing inventory bars ── */
function AppMockup() {
  const items = [
    { name: "Parafina", unit: "kg", qty: 3.2, max: 5, pct: 64 },
    {
      name: "Óleo de Lavanda",
      unit: "ml",
      qty: 80,
      max: 500,
      pct: 16,
      low: true,
    },
    { name: "Pavio de Algodão", unit: "un", qty: 120, max: 150, pct: 80 },
    { name: "Corante Âmbar", unit: "g", qty: 45, max: 100, pct: 45 },
    { name: "Pote de Vidro", unit: "un", qty: 18, max: 50, pct: 36 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-md"
      style={{ perspective: "1000px" }}
    >
      {/* Glow behind card */}
      <div className="absolute inset-0 rounded-2xl bg-gold/10 blur-2xl translate-y-4 scale-95" />

      {/* Card */}
      <div className="relative bg-white/[0.04] border border-white/10 rounded-2xl p-5 backdrop-blur-sm shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-white/40 text-xs font-medium tracking-widest uppercase mb-0.5">
              Estoque de Insumos
            </p>
            <p className="text-white font-semibold text-sm">Agosto 2025</p>
          </div>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-warning/15 border border-warning/30 text-warning text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-warning animate-pulse" />
            1 alerta
          </span>
        </div>

        {/* Items */}
        <div className="flex flex-col gap-3">
          {items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
              className="group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-white/80 text-xs font-medium">
                  {item.name}
                </span>
                <span
                  className={`text-xs font-semibold ${item.low ? "text-warning" : "text-white/50"}`}
                >
                  {item.qty} {item.unit}
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-white/8 overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${item.low ? "bg-warning" : "bg-gold"}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${item.pct}%` }}
                  transition={{
                    duration: 0.7,
                    delay: 0.8 + i * 0.08,
                    ease: "easeOut",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer stat */}
        <div className="mt-5 pt-4 border-t border-white/8 flex items-center justify-between">
          <span className="text-white/40 text-xs">
            Última atualização: agora
          </span>
          <span className="text-gold text-xs font-semibold">Ver tudo →</span>
        </div>
      </div>
    </motion.div>
  );
}

const SOCIAL_PROOF = [
  "Grátis por 14 dias",
  "Windows 10 ou superior",
  "Cancele quando quiser",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-navy-dark overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gold radial glow — top right */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gold/8 blur-[120px]" />
        {/* Secondary warm glow — bottom left */}
        <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full bg-gold-hover/5 blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="navy" className="mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                Gestão feita para artesãos
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-white leading-[1.1] tracking-tight mb-6"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              Seu negócio de velas
              <br />
              merece{" "}
              <span className="text-gold relative">
                organização
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M1 6 Q50 1 100 5 Q150 9 199 3"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
              </span>
              <br />à altura do seu talento.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Baixe o Velai no seu computador, faça um cadastro gratuito e
              assuma o controle do seu estoque de insumos — tudo em minutos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <Link
                href="#download"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-gold text-navy hover:bg-gold-hover transition-all duration-200 shadow-[0_2px_12px_rgba(34,211,238,0.25)] hover:shadow-[0_4px_20px_rgba(34,211,238,0.40)] hover:scale-[1.02]"
              >
                <Download size={18} />
                Baixar para Windows
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full border border-gold/40 text-gold hover:bg-gold-muted hover:border-gold transition-all duration-200"
              >
                Ver como funciona
              </Link>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              {SOCIAL_PROOF.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-1.5 text-white/50 text-sm"
                >
                  <CheckCircle2 size={14} className="text-success shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right — app mockup */}
          <div className="flex justify-center lg:justify-end">
            <AppMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
