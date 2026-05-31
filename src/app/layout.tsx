import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Velai — Gestão de Estoque para Artesãos",
  description:
    "Controle o estoque de insumos, gerencie sua produção e pare de perder dinheiro por falta de organização. Feito para quem produz velas, sabonetes e aromatizadores.",
  keywords: [
    "gestão de estoque",
    "artesanato",
    "velas",
    "sabonetes",
    "aromatizadores",
    "controle de insumos",
    "software artesanal",
  ],
  openGraph: {
    title: "Velai — Gestão de Estoque para Artesãos",
    description:
      "Seu negócio de velas merece organização à altura do seu talento.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${bricolage.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
