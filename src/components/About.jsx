export default function About() {
  return (
    <section id="o-firmie" className="section bg-mist">
      <div className="wrap grid gap-10 md:grid-cols-12 md:gap-16 items-end">
        <div className="md:col-span-5 reveal">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-leaf-600">
            O firmie
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-leaf-900 leading-[1.05]" style={{ fontWeight: 700 }}>
            Lokalna pracownia zieleni na Śląsku
          </h2>
        </div>
        <div className="md:col-span-7 reveal" style={{ transitionDelay: '80ms' }}>
          <p className="text-lg md:text-xl leading-relaxed text-stone">
            KADOKA to firma ogrodnicza prowadzona przez Krzysztofa Sławomira Kamińskiego.
            Od kwietnia 2024 realizujemy kompleksowe zagospodarowanie i pielęgnację
            terenów zieleni — od trawników i rabat, przez cięcie żywopłotów, po
            całoroczną opiekę oraz instalację kosiarek automatycznych.
          </p>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-stone">
            Klienci na Oferteo oceniają nas na <span className="font-semibold text-leaf-800">5/5</span>
            {' '}— 100% opinii pozytywnych. Pracujemy terminowo i zgodnie z ustaleniami.
          </p>
        </div>
      </div>
    </section>
  )
}
