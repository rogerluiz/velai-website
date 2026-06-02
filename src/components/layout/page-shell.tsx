import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { Navbar } from "./navbar";
import { Footer } from "./footer";

export interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Small muted line below description — useful for "last updated" dates */
  meta?: string;
}

/**
 * Shared layout for inner pages (changelog, roadmap, legal, etc.).
 * Wraps content with the site Navbar + Footer and renders a consistent
 * centred hero header above any children.
 */
export function PageShell({
  hero,
  children,
}: {
  hero: PageHeroProps;
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-canvas text-slate-900">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="pt-32 pb-14 px-6 border-b border-divider">
          <div className="max-w-3xl mx-auto text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-slate-600 text-sm mb-8 transition-colors group"
            >
              <ChevronLeft
                size={14}
                className="group-hover:-translate-x-0.5 transition-transform"
              />
              Início
            </Link>

            {hero.eyebrow && (
              <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
                {hero.eyebrow}
              </p>
            )}

            <h1
              className="font-display font-bold text-navy leading-tight mb-4"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              {hero.title}
            </h1>

            {hero.description && (
              <p className="text-slate-500 text-lg leading-relaxed max-w-xl mx-auto">
                {hero.description}
              </p>
            )}

            {hero.meta && (
              <p className="text-slate-400 text-sm mt-3">{hero.meta}</p>
            )}
          </div>
        </section>

        {/* ── Content ──────────────────────────────────────── */}
        {children}
      </main>
      <Footer />
    </>
  );
}
