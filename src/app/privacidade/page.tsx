import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Política de Privacidade | Velai",
  description:
    "Saiba como o Velai coleta, usa e protege seus dados pessoais, em conformidade com a LGPD.",
};

const SECTIONS = [
  {
    title: "1. Quem somos",
    content: `Velai Tecnologia Ltda. é a empresa responsável pelo tratamento dos seus dados pessoais como Controladora, conforme a Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018).

E-mail do Encarregado de Proteção de Dados (DPO): dpo@usevelai.app`,
  },
  {
    title: "2. Dados que coletamos",
    content: `Coletamos apenas os dados necessários para fornecer o Serviço:

Dados de cadastro: nome, endereço de e-mail e senha (armazenada com hash seguro).

Dados de uso: informações sobre como você usa o aplicativo (módulos acessados, ações realizadas), coletadas de forma agregada e anonimizada para melhorar o produto.

Dados de pagamento: são processados diretamente pelos nossos provedores de pagamento (Stripe / MercadoPago) — não armazenamos dados de cartão de crédito.

Dados do dispositivo: sistema operacional e versão do aplicativo, coletados para diagnóstico de erros e compatibilidade.

Dados de negócio (estoque, fórmulas, lotes): pertencem inteiramente a você. O Velai os armazena em seu computador e, no plano Pro, sincroniza com servidores na nuvem.`,
  },
  {
    title: "3. Como usamos seus dados",
    content: `Utilizamos seus dados para:

— Fornecer e manter o Serviço;
— Processar pagamentos e gerenciar assinaturas;
— Enviar comunicações transacionais (confirmações, alertas, notas de versão);
— Diagnosticar problemas técnicos e melhorar a estabilidade do aplicativo;
— Enviar novidades e promoções do Velai (apenas com seu consentimento — você pode cancelar a qualquer momento).

Não vendemos nem compartilhamos seus dados pessoais com terceiros para fins publicitários.`,
  },
  {
    title: "4. Compartilhamento de dados",
    content: `Compartilhamos dados com terceiros somente quando necessário:

Provedores de infraestrutura: Amazon Web Services (servidores e armazenamento em nuvem), localizados nos EUA, com cláusulas contratuais padrão para transferência internacional.

Processadores de pagamento: Stripe Inc. e MercadoPago, para processar transações de forma segura.

Ferramentas de diagnóstico: Sentry (relatórios de erros anônimos).

Não realizamos transferência de dados para terceiros fora deste escopo sem seu consentimento explícito.`,
  },
  {
    title: "5. Seus direitos (LGPD)",
    content: `Você tem os seguintes direitos em relação aos seus dados pessoais:

— Confirmação e acesso: saber se tratamos seus dados e acessá-los;
— Correção: atualizar dados incompletos, inexatos ou desatualizados;
— Anonimização ou eliminação: solicitar que dados desnecessários sejam anonimizados ou deletados;
— Portabilidade: receber seus dados em formato estruturado;
— Revogação do consentimento: retirar consentimentos dados anteriormente;
— Oposição: opor-se a tratamentos com os quais não concorda.

Para exercer seus direitos, envie um e-mail para dpo@usevelai.app com o assunto "Direitos LGPD". Responderemos em até 15 dias úteis.`,
  },
  {
    title: "6. Retenção de dados",
    content: `Mantemos seus dados pelo tempo necessário para a prestação do Serviço e cumprimento de obrigações legais:

— Dados de conta: enquanto a conta estiver ativa + 12 meses após encerramento;
— Dados de pagamento: conforme exigido pela legislação fiscal (5 anos);
— Logs de acesso: 6 meses, conforme o Marco Civil da Internet (Lei 12.965/2014).

Após os prazos, os dados são eliminados de forma segura ou anonimizados.`,
  },
  {
    title: "7. Segurança",
    content: `Adotamos medidas técnicas e organizacionais para proteger seus dados:

— Criptografia em trânsito (TLS 1.3) e em repouso (AES-256);
— Senhas armazenadas com bcrypt;
— Acesso aos dados restrito a colaboradores com necessidade justificada;
— Backups redundantes com testes periódicos de restauração;
— Monitoramento contínuo de segurança.

Em caso de incidente de segurança que afete seus dados, notificaremos a ANPD e os titulados afetados nos prazos legais.`,
  },
  {
    title: "8. Cookies",
    content: `Nossa política de cookies está disponível em /cookies, com detalhes sobre os tipos utilizados e como gerenciá-los.`,
  },
  {
    title: "9. Alterações nesta Política",
    content: `Podemos atualizar esta Política periodicamente. Alterações relevantes serão comunicadas por e-mail com pelo menos 15 dias de antecedência. A data da última versão está indicada no topo desta página.`,
  },
];

export default function PrivacidadePage() {
  return (
    <PageShell
      hero={{
        eyebrow: "Legal",
        title: "Política de Privacidade",
        description:
          "Como coletamos, usamos e protegemos seus dados, em conformidade com a LGPD.",
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
              Contato com o DPO
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Para exercer seus direitos ou tirar dúvidas sobre privacidade,
              entre em contato com nosso Encarregado de Proteção de Dados:{" "}
              <a
                href="mailto:dpo@usevelai.app"
                className="text-gold hover:text-gold-hover underline underline-offset-2 transition-colors"
              >
                dpo@usevelai.app
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </PageShell>
  );
}
