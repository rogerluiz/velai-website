"use client";

import { motion } from "framer-motion";
import { Star, Users, CalendarDays, ShieldCheck } from "lucide-react";

const METRICS = [
  {
    icon: Star,
    value: "4.8",
    label: "App Store & Google Play",
    iconBg: "bg-warning-light",
    iconColor: "text-warning",
  },
  {
    icon: Users,
    value: "5.000+",
    label: "artesãos ativos",
    iconBg: "bg-canvas",
    iconColor: "text-navy",
  },
  {
    icon: CalendarDays,
    value: "14 dias",
    label: "grátis, sem cartão",
    iconBg: "bg-success-light",
    iconColor: "text-success",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "seus dados, sempre",
    iconBg: "bg-warm",
    iconColor: "text-slate-500",
  },
];

export function TrustBar() {
  return (
    <section className="bg-surface border-b border-divider">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0"
        >
          {METRICS.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={m.label}
                className="relative flex flex-col items-center text-center px-4"
              >
                {/* Vertical divider between columns on desktop */}
                {i > 0 && (
                  <span className="hidden md:block absolute left-0 inset-y-0 w-px bg-divider" />
                )}
                <div
                  className={`inline-flex items-center justify-center p-2.5 rounded-xl mb-3 ${m.iconBg}`}
                >
                  <Icon size={18} className={m.iconColor} strokeWidth={2} />
                </div>
                <p className="text-navy font-bold text-2xl leading-none mb-1.5 tracking-tight">
                  {m.value}
                </p>
                <p className="text-slate-500 text-xs leading-snug max-w-[110px]">
                  {m.label}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
