import type { Metadata } from "next";
import { Mail, Clock, MessageSquare } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contato | Velai",
  description:
    "Entre em contato com a equipe do Velai. Respondemos em até 1 dia útil.",
};

const INFO_CARDS = [
  {
    icon: Mail,
    title: "E-mail de suporte",
    value: "suporte@usevelai.app",
    description: "Para dúvidas, problemas técnicos e solicitações gerais.",
    href: null,
  },
  {
    icon: Clock,
    title: "Tempo de resposta",
    value: "Até 1 dia útil",
    description: "De segunda a sexta, das 9h às 18h (horário de Brasília).",
    href: null,
  },
  {
    icon: MessageSquare,
    title: "Central de Ajuda",
    value: "Base de conhecimento",
    description: "Encontre respostas rápidas sem precisar esperar.",
    href: "/ajuda",
  },
];

export default function ContatoPage() {
  return (
    <PageShell
      hero={{
        eyebrow: "Suporte",
        title: "Fale com a gente",
        description:
          "Tem alguma dúvida, sugestão ou problema? Nossa equipe está pronta para ajudar.",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left — info */}
          <div className="flex flex-col gap-4">
            {INFO_CARDS.map((card) => (
              <div
                key={card.title}
                className="p-5 rounded-2xl border border-divider bg-surface"
              >
                <div className="p-2 rounded-xl bg-gold/10 w-fit mb-3">
                  <card.icon size={16} className="text-gold" />
                </div>
                <p className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-1">
                  {card.title}
                </p>
                {card.href ? (
                  <a
                    href={card.href}
                    className="text-navy font-semibold text-sm hover:text-gold transition-colors"
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="text-navy font-semibold text-sm">
                    {card.value}
                  </p>
                )}
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 mt-2">
              <p className="text-slate-400 text-xs leading-relaxed">
                Para relatar bugs, inclua a versão do Velai (Menu → Sobre) e uma
                descrição detalhada do problema. Isso nos ajuda a resolver mais
                rápido.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-2 p-6 sm:p-8 rounded-3xl border border-divider bg-surface">
            <h2 className="font-display font-bold text-navy text-lg mb-6">
              Envie uma mensagem
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </PageShell>
  );
}
