import { getLatestRelease } from "@/lib/github";
import { DownloadCards } from "./download-cards";

// Re-fetch release data from GitHub API at most once per hour
export const revalidate = 3600;

export async function Download() {
  const release = await getLatestRelease();

  return (
    <section
      id="download"
      className="bg-navy-dark py-24 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-gold/6 blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header — static, no client needed */}
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Download
          </p>
          <h2
            className="font-display font-bold text-white leading-tight tracking-tight mb-4"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
          >
            Disponível para o seu dispositivo
          </h2>
          <p className="text-white/50 text-base max-w-md mx-auto">
            Baixe o Velai, instale em minutos e faça seu cadastro gratuito para
            começar a organizar seu estoque hoje.
          </p>
        </div>

        {/* Animated cards — Client Component with real release data */}
        <DownloadCards release={release} />
      </div>
    </section>
  );
}
