import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Política de Cookies | Velai",
  description:
    "Saiba como o Velai utiliza cookies e como você pode gerenciá-los.",
};

const COOKIE_TABLE = [
  {
    name: "velai_session",
    type: "Essencial",
    purpose: "Mantém sua sessão autenticada no painel web",
    duration: "Sessão",
  },
  {
    name: "velai_prefs",
    type: "Essencial",
    purpose: "Armazena preferências de interface (tema, idioma)",
    duration: "1 ano",
  },
  {
    name: "_ga, _gid",
    type: "Analítico",
    purpose:
      "Google Analytics — mede tráfego e comportamento de navegação (anonimizado)",
    duration: "2 anos / 24h",
  },
  {
    name: "_fbp",
    type: "Marketing",
    purpose: "Meta Pixel — rastreia conversões de campanhas de marketing",
    duration: "3 meses",
  },
];

const TYPE_STYLES: Record<string, string> = {
  Essencial: "bg-success/10 text-success border-success/20",
  Analítico: "bg-blue-400/10 text-blue-400 border-blue-400/20",
  Marketing: "bg-purple-400/10 text-purple-400 border-purple-400/20",
};

const SECTIONS = [
  {
    title: "O que são cookies?",
    content: `Cookies são pequenos arquivos de texto armazenados no seu navegador quando você visita um site. Eles são amplamente utilizados para fazer sites funcionarem de forma mais eficiente e fornecer informações aos proprietários do site.

O aplicativo desktop Velai não utiliza cookies. Esta política aplica-se exclusivamente ao site usevelai.app.`,
  },
  {
    title: "Cookies essenciais",
    content: `Esses cookies são necessários para que o site funcione corretamente. Sem eles, serviços como login e preferências de interface não funcionam. Não é possível recusar cookies essenciais sem impactar o funcionamento do site.`,
  },
  {
    title: "Cookies analíticos",
    content: `Utilizamos o Google Analytics para entender como os visitantes interagem com o nosso site. Todas as informações coletadas são anonimizadas — não identificamos usuários individualmente. Esses cookies nos ajudam a melhorar o conteúdo e a usabilidade do site.`,
  },
  {
    title: "Cookies de marketing",
    content: `Utilizamos o Meta Pixel para medir a eficácia das nossas campanhas publicitárias no Instagram e Facebook. Esses cookies associam sua visita ao site com anúncios que você possa ter visto. Você pode recusar esses cookies sem impactar o funcionamento do site.`,
  },
  {
    title: "Como gerenciar cookies",
    content: `Você pode controlar e/ou excluir cookies quando quiser. Para isso:

— No seu navegador: acesse as configurações de privacidade/cookies do Chrome, Safari, Firefox ou Edge e ajuste conforme desejado;
— Para cookies de terceiros: utilize as ferramentas de opt-out do Google Analytics (tools.google.com/dlpage/gaoptout) e do Meta (configurações de anúncios em facebook.com/privacy);
— Ao limpar cookies do navegador, suas preferências serão redefinidas para o padrão.

Recusar cookies analíticos e de marketing não afeta o funcionamento do site.`,
  },
  {
    title: "Alterações nesta Política",
    content: `Podemos atualizar esta Política de Cookies para refletir mudanças nas nossas práticas. Recomendamos revisitá-la periodicamente. A data da última atualização está indicada acima.`,
  },
];

export default function CookiesPage() {
  return (
    <PageShell
      hero={{
        eyebrow: "Legal",
        title: "Política de Cookies",
        description:
          "Como utilizamos cookies no site usevelai.app e como você pode controlá-los.",
        meta: "Última atualização: 31 de maio de 2025",
      }}
    >
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex flex-col gap-10">
          {/* Intro text */}
          {SECTIONS.slice(0, 1).map((s) => (
            <section key={s.title}>
              <h2 className="font-display font-bold text-slate-800 text-base mb-3">
                {s.title}
              </h2>
              <div className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                {s.content}
              </div>
            </section>
          ))}

          {/* Cookie table */}
          <section>
            <h2 className="font-display font-bold text-slate-800 text-base mb-4">
              Cookies que utilizamos
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-divider">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-divider bg-slate-50">
                    {["Cookie", "Tipo", "Finalidade", "Duração"].map((h) => (
                      <th
                        key={h}
                        className="text-left px-4 py-3 text-slate-500 font-medium text-xs uppercase tracking-wide whitespace-nowrap"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COOKIE_TABLE.map((row, i) => (
                    <tr
                      key={row.name}
                      className={
                        i < COOKIE_TABLE.length - 1
                          ? "border-b border-slate-100"
                          : ""
                      }
                    >
                      <td className="px-4 py-3 text-slate-700 font-mono text-xs whitespace-nowrap">
                        {row.name}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`text-xs font-medium px-2 py-0.5 rounded-full border ${TYPE_STYLES[row.type] ?? "bg-slate-100 text-slate-500 border-slate-200"}`}
                        >
                          {row.type}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-500 text-xs leading-relaxed">
                        {row.purpose}
                      </td>
                      <td className="px-4 py-3 text-slate-500 text-xs whitespace-nowrap">
                        {row.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Remaining sections */}
          {SECTIONS.slice(1).map((s) => (
            <section key={s.title}>
              <h2 className="font-display font-bold text-slate-800 text-base mb-3">
                {s.title}
              </h2>
              <div className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                {s.content}
              </div>
            </section>
          ))}

          <section className="pt-6 border-t border-slate-200">
            <p className="text-slate-400 text-sm leading-relaxed">
              Dúvidas? Escreva para{" "}
              <a
                href="mailto:privacidade@usevelai.app"
                className="text-gold hover:text-gold-hover underline underline-offset-2 transition-colors"
              >
                privacidade@usevelai.app
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </PageShell>
  );
}
