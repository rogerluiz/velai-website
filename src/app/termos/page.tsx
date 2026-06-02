import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Termos de Uso | Velai",
  description: "Termos e condições de uso do software Velai.",
};

const SECTIONS = [
  {
    title: "1. Aceitação dos Termos",
    content: `Ao instalar, acessar ou usar o software Velai ("Serviço"), você ("Usuário") concorda com estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não utilize o Serviço.

Estes termos constituem um contrato legal entre você e Velai Tecnologia Ltda. ("Velai", "nós", "nosso").`,
  },
  {
    title: "2. Descrição do Serviço",
    content: `O Velai é um software de gestão de estoque e produção desenvolvido para artesãos que fabricam velas, sabonetes e aromatizadores. O Serviço está disponível como aplicativo desktop para Windows e como serviço de assinatura com funcionalidades em nuvem.`,
  },
  {
    title: "3. Conta e Acesso",
    content: `Para usar o Velai, você deve:

— Ter pelo menos 18 anos de idade ou ter autorização de um responsável legal;
— Fornecer informações verdadeiras e atualizadas no cadastro;
— Manter a confidencialidade de suas credenciais de acesso;
— Notificar-nos imediatamente em caso de uso não autorizado da sua conta.

Você é responsável por todas as atividades realizadas com sua conta.`,
  },
  {
    title: "4. Planos e Pagamento",
    content: `O Velai oferece um plano gratuito com funcionalidades limitadas e planos pagos (Pro). Ao contratar um plano pago:

— O pagamento é processado de forma segura por nossos provedores parceiros;
— A assinatura é renovada automaticamente ao fim de cada período, salvo cancelamento prévio;
— Não há reembolso por períodos parcialmente utilizados, exceto nos casos previstos no item 5;
— Os preços podem ser alterados com aviso prévio de 30 dias por e-mail.`,
  },
  {
    title: "5. Reembolso",
    content: `Oferecemos reembolso integral em até 7 (sete) dias corridos após a contratação inicial de um plano pago, conforme o art. 49 do Código de Defesa do Consumidor (Lei 8.078/90).

Para solicitar reembolso, entre em contato pelo e-mail suporte@usevelai.app com o assunto "Reembolso". O prazo de processamento é de até 5 dias úteis.`,
  },
  {
    title: "6. Propriedade Intelectual",
    content: `Todo o conteúdo do Velai — incluindo software, design, textos, marcas e logotipos — é propriedade da Velai Tecnologia Ltda. ou de seus licenciantes e é protegido por leis de propriedade intelectual.

Você recebe uma licença limitada, não exclusiva e intransferível para usar o Serviço conforme estes Termos. Fica expressamente proibido:

— Copiar, modificar ou distribuir o software;
— Fazer engenharia reversa;
— Sublicenciar ou revender o acesso ao Serviço.`,
  },
  {
    title: "7. Limitação de Responsabilidade",
    content: `O Velai é fornecido "como está". Não garantimos disponibilidade ininterrupta nem ausência de erros. Em nenhum caso nossa responsabilidade excederá o valor pago pelo Usuário nos últimos 3 meses de assinatura.

Não nos responsabilizamos por perdas de dados decorrentes de falhas de hardware, problemas no sistema operacional do usuário ou uso inadequado do software.`,
  },
  {
    title: "8. Dados e Privacidade",
    content: `O tratamento dos seus dados pessoais é regido pela nossa Política de Privacidade, disponível em /privacidade, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018).`,
  },
  {
    title: "9. Rescisão",
    content: `Você pode encerrar sua conta a qualquer momento pelo menu "Minha conta" dentro do aplicativo. Podemos suspender ou encerrar seu acesso em caso de violação destes Termos, com ou sem aviso prévio dependendo da gravidade da infração.`,
  },
  {
    title: "10. Alterações nos Termos",
    content: `Podemos atualizar estes Termos periodicamente. Alterações materiais serão comunicadas por e-mail com pelo menos 15 dias de antecedência. O uso continuado do Serviço após as alterações implica aceitação dos novos termos.`,
  },
  {
    title: "11. Legislação Aplicável",
    content: `Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de São Paulo/SP para dirimir quaisquer disputas decorrentes deste contrato, com renúncia a qualquer outro, por mais privilegiado que seja.`,
  },
];

export default function TermosPage() {
  return (
    <PageShell
      hero={{
        eyebrow: "Legal",
        title: "Termos de Uso",
        description: "Leia com atenção antes de usar o Velai.",
        meta: "Última atualização: 31 de maio de 2025 — versão 2.0",
      }}
    >
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex flex-col gap-10">
          {SECTIONS.map((section) => (
            <section key={section.title}>
              <h2 className="font-display font-bold text-slate-800 text-base mb-3">
                {section.title}
              </h2>
              <div className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </section>
          ))}

          <section className="pt-6 border-t border-slate-200">
            <h2 className="font-display font-bold text-slate-800 text-base mb-3">
              Dúvidas sobre os Termos?
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Entre em contato pelo e-mail{" "}
              <a
                href="mailto:legal@usevelai.app"
                className="text-gold hover:text-gold-hover underline underline-offset-2 transition-colors"
              >
                legal@usevelai.app
              </a>{" "}
              ou pela nossa{" "}
              <a
                href="/contato"
                className="text-gold hover:text-gold-hover underline underline-offset-2 transition-colors"
              >
                página de contato
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </PageShell>
  );
}
