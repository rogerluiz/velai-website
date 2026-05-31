"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "O Velai funciona no celular?",
    answer:
      "Sim! O Velai é um aplicativo nativo para desktop (Windows e Mac) e também está disponível para dispositivos móveis. Você acessa do jeito que preferir.",
  },
  {
    question: "Preciso de conhecimento técnico para usar?",
    answer:
      "Não. O Velai foi criado pensando em artesãos, não em contadores ou gestores de TI. A interface é visual, intuitiva e você aprende a usar em minutos.",
  },
  {
    question: "Posso cadastrar qualquer tipo de insumo?",
    answer:
      "Sim. Você cadastra seus insumos do jeito que usa: por quilograma, litro, unidade, gramas, mililitros — qualquer unidade de medida que fizer sentido para a sua produção.",
  },
  {
    question: "O que acontece após os 14 dias de teste?",
    answer:
      "Você escolhe se quer continuar com o plano Pro ou pausar a conta. Seus dados ficam salvos por 30 dias caso queira voltar depois.",
  },
  {
    question: "Meus dados ficam seguros?",
    answer:
      "Sim. Utilizamos criptografia de ponta a ponta e backups automáticos diários. Sua lista de receitas e estoque são seus — sempre.",
  },
];

function AccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-divider"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span
          className={cn(
            "font-semibold text-base leading-snug transition-colors duration-200",
            isOpen ? "text-navy" : "text-navy-mid"
          )}
        >
          {item.question}
        </span>
        <ChevronDown
          size={18}
          className={cn(
            "shrink-0 text-slate-500 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-slate-500 text-sm leading-relaxed pb-5 pr-8">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="bg-surface py-24 md:py-32">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-3">
            Dúvidas
          </p>
          <h2
            className="font-display font-bold text-navy leading-tight"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            Perguntas frequentes
          </h2>
        </motion.div>

        {/* Accordion */}
        <div>
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem
              key={item.question}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
