import { reviews } from '../data/content'

export default function Reviews() {
  return (
    <section id="opinie" className="section bg-leaf-50">
      <div className="wrap">
        <div className="max-w-2xl reveal">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-leaf-600">
            Opinie klientów
          </p>
          <h2
            className="mt-3 font-display text-4xl md:text-5xl text-leaf-900 leading-[1.05]"
            style={{ fontWeight: 700 }}
          >
            5/5 na Oferteo — 100% pozytywnych
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {reviews.map((review, index) => (
            <blockquote
              key={`${review.initial}-${index}`}
              className="reveal border-l-4 border-leaf-600 pl-5 md:pl-6"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <p className="text-amber-600 tracking-wide" aria-label="Ocena 5 na 5">
                ★★★★★
              </p>
              <p className="mt-3 text-lg leading-relaxed text-ink/90 italic">
                „{review.text}”
              </p>
              <footer className="mt-4 text-sm font-semibold text-leaf-800">
                {review.initial}. · Oferteo · 1 rok temu
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
