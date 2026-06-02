"use client";

import { useState } from "react";
import { Palette, X } from "lucide-react";
import { themes } from "@/lib/themes";
import { useTheme } from "@/lib/theme-context";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const active = themes.find((t) => t.id === theme);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Panel */}
      {open && (
        <div className="bg-navy border border-white/10 rounded-2xl p-3 shadow-2xl backdrop-blur-sm w-44">
          <p className="text-white/30 text-[10px] font-semibold tracking-widest uppercase px-1 mb-2">
            Tema
          </p>
          <div className="flex flex-col gap-0.5">
            {themes.map((t) => {
              const isActive = theme === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setOpen(false);
                  }}
                  className={`flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-sm font-medium w-full text-left transition-colors cursor-pointer
                    ${isActive ? "bg-gold/15 text-gold" : "text-white/55 hover:bg-white/6 hover:text-white"}`}
                >
                  <span className="text-base leading-none">{t.emoji}</span>
                  <span className="flex-1">{t.name}</span>
                  {/* Accent swatch */}
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0 ring-1 ring-white/15"
                    style={{ background: t.preview.accent }}
                  />
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Fechar seletor de tema" : "Trocar tema"}
        className="w-11 h-11 rounded-full bg-navy border border-white/10 flex items-center justify-center shadow-lg hover:bg-navy-mid transition-colors cursor-pointer"
        style={{ color: active?.preview.accent ?? "#f6b91a" }}
      >
        {open ? <X size={16} /> : <Palette size={18} />}
      </button>
    </div>
  );
}
