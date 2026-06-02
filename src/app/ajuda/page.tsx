import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Package, FlaskConical, CreditCard } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Central de Ajuda | Velai",
  description:
    "Encontre respostas para as dúvidas mais frequentes sobre o Velai.",
};

const CATEGORIES = [
  {
    icon: BookOpen,
    title: "Primeiros Passos",
    color: "text-gold",
    bg: "bg-gold/10",
    questions: [
      {
        q: "Como instalo o Velai no meu computador?",
        a: "Baixe o instalador na página de Download, execute o arquivo .exe e siga as instruções na tela. O processo leva menos de 2 minutos. Após instalar, crie sua conta gratuita diretamente no aplicativo.",
      },
      {
        q: "O Velai funciona no Mac e Linux?",
        a: "No momento o Velai está disponível apenas para Windows (7, 10 e 11). Versões para macOS e Linux estão no nosso roadmap para 2025. Você pode acompanhar o progresso na página de Roadmap.",
      },
      {
        q: "Preciso de internet para usar o Velai?",
        a: "Não para uso básico. O Velai funciona offline — seus dados ficam salvos no seu computador. A internet é necessária somente para sincronização entre dispositivos, atualizações e backup na nuvem.",
      },
      {
        q: "Como faço o primeiro cadastro de insumos?",
        a: 'No menu lateral, acesse "Estoque" → "Insumos" → botão "Novo insumo". Preencha nome, unidade de medida, quantidade atual e ponto de alerta. Repita para cada insumo que você usa na produção.',
      },
    ],
  },
  {
    icon: Package,
    title: "Gestão de Estoque",
    color: "text-success",
    bg: "bg-success/10",
    questions: [
      {
        q: "Como registro uma entrada de insumos?",
        a: 'Vá em "Estoque" → "Entradas" → "Nova entrada". Selecione o insumo, informe a quantidade e o preço pago. O saldo é atualizado automaticamente e o histórico fica registrado para rastreabilidade.',
      },
      {
        q: "Como configuro alertas de estoque mínimo?",
        a: 'Ao cadastrar ou editar um insumo, defina o campo "Ponto de alerta". Quando o saldo atingir esse valor, o Velai exibe um alerta no dashboard e, se configurado, envia uma notificação.',
      },
      {
        q: "É possível fazer inventário e ajustar diferenças?",
        a: 'Sim. Em "Estoque" → "Ajuste de inventário" você compara o saldo do sistema com a contagem física e registra as diferenças com justificativa, mantendo auditoria completa.',
      },
      {
        q: "O Velai suporta múltiplas unidades de medida?",
        a: "Sim. Você pode trabalhar com gramas, quilogramas, mililitros, litros, unidades e outras medidas personalizadas. Cada insumo tem sua própria unidade, e as conversões podem ser configuradas nas fórmulas.",
      },
    ],
  },
  {
    icon: FlaskConical,
    title: "Produção",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    questions: [
      {
        q: "Como crio uma fórmula de produção?",
        a: 'Em "Produção" → "Fórmulas" → "Nova fórmula", dê um nome ao produto, adicione os insumos com suas respectivas quantidades por unidade produzida. O custo por unidade é calculado automaticamente.',
      },
      {
        q: "Como registro um lote produzido?",
        a: 'Em "Produção" → "Novo lote", selecione a fórmula, informe a quantidade produzida e a data. O sistema desconta os insumos utilizados do estoque automaticamente.',
      },
      {
        q: "Como calculo o preço de venda pelo custo de produção?",
        a: 'Na fórmula ou no lote, o Velai mostra o custo total por unidade. Use o campo "Margem desejada (%)" para calcular automaticamente o preço de venda sugerido.',
      },
    ],
  },
  {
    icon: CreditCard,
    title: "Conta e Planos",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    questions: [
      {
        q: "Como faço upgrade do plano gratuito para o Pro?",
        a: 'Dentro do Velai, clique no seu nome de usuário no canto inferior esquerdo → "Minha conta" → "Planos". Escolha o plano Pro e finalize o pagamento via cartão de crédito ou PIX.',
      },
      {
        q: "Posso usar o Velai em mais de um computador?",
        a: "No plano gratuito, o acesso é restrito a um dispositivo. No plano Pro você pode usar em até 3 computadores ou dispositivos simultaneamente, com sincronização automática entre eles.",
      },
      {
        q: "Como cancelo minha assinatura?",
        a: 'Em "Minha conta" → "Planos" → "Cancelar assinatura". Após o cancelamento, você continua com acesso Pro até o fim do período já pago. Seus dados não são excluídos — você pode reativar a qualquer momento.',
      },
      {
        q: "Existe reembolso se eu não gostar?",
        a: "Sim. Oferecemos reembolso integral em até 7 dias após a primeira assinatura, conforme o Código de Defesa do Consumidor. Para solicitar, entre em contato pelo suporte.",
      },
    ],
  },
];

export default function AjudaPage() {
  return (
    <PageShell
      hero={{
        eyebrow: "Suporte",
        title: "Central de Ajuda",
        description:
          "Respostas para as dúvidas mais frequentes. Não encontrou o que procura? Entre em contato.",
      }}
    >
      <div className="max-w-3xl mx-auto px-6 py-16 flex flex-col gap-14">
        {CATEGORIES.map((cat) => (
          <section key={cat.title}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 rounded-xl ${cat.bg}`}>
                <cat.icon size={18} className={cat.color} />
              </div>
              <h2 className="font-display font-bold text-navy text-lg">
                {cat.title}
              </h2>
            </div>

            <div className="flex flex-col gap-2">
              {cat.questions.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-divider bg-surface hover:border-slate-300 transition-colors"
                >
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none select-none">
                    <span className="text-slate-700 text-sm font-medium leading-snug">
                      {item.q}
                    </span>
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      className="shrink-0 w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform duration-200"
                    >
                      <path
                        d="M4 6l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </section>
        ))}

        <div className="rounded-3xl border border-divider bg-surface p-8 text-center">
          <h3 className="font-display font-bold text-navy text-lg mb-2">
            Ainda com dúvidas?
          </h3>
          <p className="text-slate-500 text-sm mb-5">
            Nossa equipe responde em até 1 dia útil.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-navy font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
          >
            Falar com o suporte
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
