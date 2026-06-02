import Image from "next/image";

export function ComingSoon() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-navy-dark)] px-6 text-center">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[var(--color-gold)] opacity-[0.07] blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[var(--color-gold-dark)] opacity-[0.05] blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-10 max-w-lg w-full">
        {/* Logo */}
        <Image
          src="/logo-horizontal.svg"
          alt="Velai"
          width={140}
          height={40}
          priority
          className="brightness-0 invert"
        />

        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-gold)] border-opacity-30 bg-[var(--color-gold-muted)] text-[var(--color-gold)] text-xs font-medium tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] animate-pulse" />
          Em desenvolvimento
        </span>

        {/* Heading */}
        <div className="flex flex-col gap-3">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
            Algo incrível está{" "}
            <span className="text-[var(--color-gold)]">chegando</span>
          </h1>
          <p className="text-[var(--color-slate-300)] text-lg leading-relaxed">
            Estamos construindo a melhor ferramenta de gestão de estoque para
            artesãos. Em breve você vai poder controlar insumos, produção e
            muito mais.
          </p>
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-[var(--color-gold)] opacity-40" />

        {/* Footer note */}
        <p className="text-[var(--color-slate-500)] text-sm">
          © {new Date().getFullYear()} Velai · Todos os direitos reservados
        </p>
      </div>
    </main>
  );
}
