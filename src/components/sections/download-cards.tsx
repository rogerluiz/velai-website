"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Globe,
  Download as DownloadIcon,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReleaseInfo } from "@/lib/github";

interface Platform {
  id: string;
  icon: LucideIcon;
  label: string;
  sublabel: string;
  badge: string;
  badgeColor: string;
  primary: boolean;
  href: string | undefined;
  cta: string;
  ctaIcon: LucideIcon | undefined;
  meta: string | null;
}

const REQUIREMENTS = [
  "Windows 10 64-bit ou superior",
  "4 GB de RAM (8 GB recomendado)",
  "200 MB de espaço em disco",
  "Conexão com a internet para sincronização",
];

interface DownloadCardsProps {
  release: ReleaseInfo | null;
}

export function DownloadCards({ release }: DownloadCardsProps) {
  const exeUrl = release?.exeAsset?.downloadUrl;
  const version = release?.version ?? "—";
  const sizeMb = release?.exeAsset
    ? (release.exeAsset.size / (1024 * 1024)).toFixed(1)
    : "—";

  const PLATFORMS: Platform[] = [
    {
      id: "windows",
      icon: Monitor,
      label: "Windows",
      sublabel: "Windows 10 ou superior",
      badge: exeUrl ? "Disponível" : "Indisponível",
      badgeColor: exeUrl
        ? "bg-success-light text-success"
        : "bg-canvas text-slate-500 border border-divider",
      primary: true,
      href: exeUrl,
      cta: exeUrl ? "Baixar para Windows" : "Aguardando release",
      ctaIcon: exeUrl ? DownloadIcon : undefined,
      meta: exeUrl ? `v${version}  •  ${sizeMb} MB` : null,
    },
    {
      id: "android",
      icon: Smartphone,
      label: "Android",
      sublabel: "Android 8.0 ou superior",
      badge: "Em breve",
      badgeColor: "bg-canvas text-slate-500 border border-divider",
      primary: false,
      href: undefined,
      cta: "Em breve",
      ctaIcon: undefined,
      meta: null,
    },
    {
      id: "web",
      icon: Globe,
      label: "Web",
      sublabel: "Acesse direto pelo navegador",
      badge: "Em breve",
      badgeColor: "bg-canvas text-slate-500 border border-divider",
      primary: false,
      href: undefined,
      cta: "Em breve",
      ctaIcon: undefined,
      meta: null,
    },
  ];

  return (
    <>
      {/* Platform cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
        {PLATFORMS.map((p, i) => {
          const Icon = p.icon;
          const CtaIcon = p.ctaIcon;
          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-7 border flex flex-col gap-5 ${
                p.primary
                  ? "bg-white/[0.06] border-gold/25 ring-1 ring-gold/15"
                  : "bg-white/[0.03] border-white/8 opacity-60"
              }`}
            >
              {p.primary && (
                <div className="absolute -top-3 left-6">
                  <span className="px-3 py-1 rounded-full bg-gold text-navy text-xs font-bold shadow-lg">
                    ✦ Recomendado
                  </span>
                </div>
              )}

              <div className="flex items-start justify-between">
                <div
                  className={`p-3 rounded-xl ${p.primary ? "bg-gold/15" : "bg-white/5"}`}
                >
                  <Icon
                    size={22}
                    className={p.primary ? "text-gold" : "text-white/40"}
                  />
                </div>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${p.badgeColor}`}
                >
                  {p.badge}
                </span>
              </div>

              <div>
                <h3
                  className={`font-semibold text-lg mb-1 ${p.primary ? "text-white" : "text-white/40"}`}
                >
                  {p.label}
                </h3>
                <p className="text-white/40 text-sm">{p.sublabel}</p>
                {p.meta && (
                  <p className="text-white/25 text-xs mt-1 font-mono">
                    {p.meta}
                  </p>
                )}
              </div>

              {p.href ? (
                <a
                  href={p.href}
                  className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gold text-navy font-semibold text-sm hover:bg-gold-hover transition-all duration-200 shadow-[0_2px_12px_rgba(246,185,26,0.3)] hover:shadow-[0_4px_20px_rgba(246,185,26,0.4)]"
                >
                  {CtaIcon && <CtaIcon size={16} />}
                  {p.cta}
                </a>
              ) : (
                <div className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 text-white/25 font-semibold text-sm cursor-not-allowed select-none">
                  {p.cta}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* System requirements */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-xl mx-auto bg-white/[0.03] border border-white/8 rounded-2xl p-6"
      >
        <h4 className="text-white/70 font-semibold text-sm mb-4 flex items-center gap-2">
          <Monitor size={14} className="text-gold" />
          Requisitos mínimos — Windows
        </h4>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {REQUIREMENTS.map((req) => (
            <li
              key={req}
              className="flex items-start gap-2 text-white/40 text-xs leading-relaxed"
            >
              <CheckCircle2 size={13} className="text-success shrink-0 mt-0.5" />
              {req}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Post-download note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
      >
        <p className="text-white/30 text-sm flex items-center gap-1.5">
          <ArrowRight size={13} className="text-gold shrink-0" />
          Após instalar, crie sua conta gratuita no app para ativar os 14 dias de teste.
        </p>
        {release?.releasePageUrl && (
          <a
            href={release.releasePageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/25 hover:text-white/50 text-xs flex items-center gap-1 transition-colors shrink-0"
          >
            Ver changelog
            <ExternalLink size={11} />
          </a>
        )}
      </motion.div>
    </>
  );
}
