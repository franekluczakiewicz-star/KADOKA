import { services } from '../data/content'

export default function Services() {
  return (
    <section id="uslugi" className="section bg-leaf-900 text-white">
      <div className="wrap">
        <div className="max-w-2xl reveal">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-leaf-300">
            Zakres usług
          </p>
          <h2
            className="mt-3 font-display text-4xl md:text-5xl leading-[1.05]"
            style={{ fontWeight: 700 }}
          >
            Od projektu rabat po całoroczną opiekę
          </h2>
          <p className="mt-4 text-leaf-100/80 text-lg">
            PKD 8130Z — działalność usługowa związana z zagospodarowaniem terenów zieleni.
          </p>
        </div>

        <ul className="mt-14 grid gap-x-12 gap-y-0 md:grid-cols-2">
          {services.map((service, index) => (
            <li
              key={service.title}
              className="reveal border-t border-white/15 py-7"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <h3 className="font-display text-2xl" style={{ fontWeight: 700 }}>
                {service.title}
              </h3>
              <p className="mt-2 text-leaf-100/75 leading-relaxed">{service.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
