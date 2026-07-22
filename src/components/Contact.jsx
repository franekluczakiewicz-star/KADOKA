import { company, registry } from '../data/content'

export default function Contact() {
  return (
    <section id="kontakt" className="section bg-mist">
      <div className="wrap grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="reveal">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-leaf-600">
            Kontakt
          </p>
          <h2
            className="mt-3 font-display text-4xl md:text-5xl text-leaf-900 leading-[1.05]"
            style={{ fontWeight: 700 }}
          >
            Porozmawiajmy o Twoim ogrodzie
          </h2>
          <p className="mt-4 text-lg text-stone leading-relaxed">
            Napisz lub zadzwoń — chętnie doradzimy i przygotujemy ofertę dopasowaną
            do Twojej działki.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={company.phoneHref}
              className="block font-display text-3xl text-leaf-800 hover:text-leaf-600 transition-colors"
              style={{ fontWeight: 700 }}
            >
              {company.phone}
            </a>
            <a
              href={company.emailHref}
              className="block text-lg text-leaf-800 hover:text-leaf-600 transition-colors"
            >
              {company.email}
            </a>
            <p className="text-stone">{company.address}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {company.platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-leaf-700 underline-offset-4 hover:underline"
              >
                {platform.name}
              </a>
            ))}
          </div>
        </div>

        <div className="reveal" style={{ transitionDelay: '100ms' }}>
          <h3
            className="font-display text-2xl text-leaf-900"
            style={{ fontWeight: 700 }}
          >
            Dane rejestrowe
          </h3>
          <dl className="mt-6 divide-y divide-leaf-200 border-y border-leaf-200">
            {registry.map((row) => (
              <div
                key={row.label}
                className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6"
              >
                <dt className="text-sm font-semibold text-leaf-700">{row.label}</dt>
                <dd className="text-ink/90">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
