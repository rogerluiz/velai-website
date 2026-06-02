import { ComingSoon } from "@/components/sections/coming-soon";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { PainPoints } from "@/components/sections/pain-points";
import { Solution } from "@/components/sections/solution";
import { Features } from "@/components/sections/features";
import { ForWho } from "@/components/sections/for-who";
import { Testimonials } from "@/components/sections/testimonials";
import { Download } from "@/components/sections/download";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { CtaFinal } from "@/components/sections/cta-final";

const isProd = process.env.NEXT_PUBLIC_APP_ENV === "prod";

export default function Home() {
  if (isProd) {
    return <ComingSoon />;
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <PainPoints />
        <Solution />
        <Features />
        <ForWho />
        <Testimonials />
        <Download />
        <Pricing />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
