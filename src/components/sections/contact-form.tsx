"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const SUBJECTS = [
  "Dúvida sobre funcionalidade",
  "Problema técnico / bug",
  "Cobrança e pagamento",
  "Cancelamento de plano",
  "Sugestão de melhoria",
  "Outro",
];

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    // Simulated delay — replace with your actual submission logic
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center text-center gap-4 py-12">
        <div className="p-4 rounded-full bg-success/10">
          <CheckCircle size={32} className="text-success" />
        </div>
        <h3 className="font-display font-bold text-navy text-xl">
          Mensagem enviada!
        </h3>
        <p className="text-slate-500 max-w-sm">
          Recebemos sua mensagem e responderemos em até 1 dia útil no e-mail{" "}
          <span className="text-slate-700">{form.email}</span>
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setForm({ name: "", email: "", subject: "", message: "" });
          }}
          className="text-gold hover:text-gold-hover text-sm underline underline-offset-2 transition-colors mt-2"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Nome" required>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Seu nome"
            required
            className={inputCls}
          />
        </Field>
        <Field label="E-mail" required>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            required
            className={inputCls}
          />
        </Field>
      </div>

      <Field label="Assunto" required>
        <select
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
          className={inputCls}
        >
          <option value="" disabled>
            Selecione um assunto
          </option>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Mensagem" required>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Descreva sua dúvida ou problema com o máximo de detalhes..."
          required
          rows={6}
          className={`${inputCls} resize-none`}
        />
      </Field>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === "sending"}
        className="self-start"
      >
        {status === "sending" ? (
          <>
            <span className="animate-spin inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
            Enviando…
          </>
        ) : (
          <>
            <Send size={16} />
            Enviar mensagem
          </>
        )}
      </Button>
    </form>
  );
}

// ── helpers ───────────────────────────────────────────────────────────────────

const inputCls =
  "w-full bg-slate-50 border border-divider rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-gold/60 focus:bg-white transition-all";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-slate-600 text-sm font-medium">
        {label}
        {required && <span className="text-gold ml-0.5">*</span>}
      </span>
      {children}
    </label>
  );
}
