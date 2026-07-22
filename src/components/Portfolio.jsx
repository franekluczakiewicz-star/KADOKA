import { portfolio } from '../data/content'

export default function Portfolio() {
  return (
    <section id="realizacje" className="section bg-mist">
      <div className="wrap">
        <div className="max-w-2xl reveal">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-leaf-600">
            Realizacje
          </p>
          <h2
            className="mt-3 font-display text-4xl md:text-5xl text-leaf-900 leading-[1.05]"
            style={{ fontWeight: 700 }}
          >
            Wybrane prace w terenie
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item, index) => (
            <figure
              key={item.title}
              className={`reveal group relative overflow-hidden ${
                index === 0 ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[280px] lg:min-h-[420px]' : 'min-h-[220px]'
              }`}
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-leaf-900/80 to-transparent p-5 pt-16">
                <span className="font-display text-lg text-white" style={{ fontWeight: 600 }}>
                  {item.title}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
