import { company } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-leaf-900 text-leaf-100">
      <div className="wrap py-12 md:py-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p
            className="font-display text-3xl text-white"
            style={{ fontWeight: 800 }}
          >
            {company.name}
          </p>
          <p className="mt-2 text-leaf-200/80">{company.fullName}</p>
          <p className="mt-1 text-sm text-leaf-300/70">{company.address}</p>
        </div>
        <div className="text-sm space-y-1 md:text-right">
          <a href={company.phoneHref} className="block hover:text-white transition-colors">
            tel. {company.phone}
          </a>
          <a href={company.emailHref} className="block hover:text-white transition-colors">
            {company.email}
          </a>
          <p className="pt-2 text-leaf-300/60">
            {company.platforms.map((p) => p.name).join(' · ')}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap py-4 text-xs text-leaf-300/50 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} {company.name}</span>
          <span>Usługi ogrodnicze · Śląsk</span>
          <span>Praca została wykonana przez Franek Łuczakiewicz</span>
        </div>
      </div>
    </footer>
  )
}
