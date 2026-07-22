import { company } from '../data/content'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=2000&q=80'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Zadbany ogród z rabatami i trawnikiem"
          className="h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-leaf-900/85 via-leaf-900/55 to-leaf-900/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-leaf-900/50 via-transparent to-leaf-900/30" />
      </div>

      <div className="relative wrap flex min-h-[100svh] flex-col justify-end pb-16 pt-28 md:justify-center md:pb-24 md:pt-20">
        <div className="max-w-2xl text-white">
          <img
            src="/logo-on-white.png"
            alt="Logo KadoKa — Twój zielony ogród"
            className="h-28 sm:h-32 md:h-40 w-auto rounded-md opacity-0 animate-fade-up"
            style={{ animationDelay: '0.05s', animationFillMode: 'forwards' }}
          />
          <h1
            className="sr-only"
          >
            KadoKa — {company.tagline}
          </h1>
          <p
            className="mt-6 max-w-md text-base md:text-lg text-white/80 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
          >
            Usługi ogrodnicze na Śląsku — terminowo, zgodnie z ustaleniami,
            z doradztwem na każdym etapie.
          </p>
          <div
            className="mt-8 flex flex-wrap gap-3 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <a href={company.phoneHref} className="btn-primary bg-white text-leaf-900 hover:bg-leaf-100">
              Zadzwoń {company.phone}
            </a>
            <a href="#uslugi" className="btn-ghost">
              Zobacz usługi
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
