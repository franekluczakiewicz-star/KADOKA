import { useEffect, useState } from 'react'
import { company } from '../data/content'

const links = [
  { href: '#o-firmie', label: 'O firmie' },
  { href: '#uslugi', label: 'Usługi' },
  { href: '#realizacje', label: 'Realizacje' },
  { href: '#opinie', label: 'Opinie' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-mist/95 backdrop-blur-md border-b border-leaf-100'
          : 'bg-transparent'
      }`}
    >
      <div className="wrap flex h-16 md:h-20 items-center justify-between">
        <a href="#top" className="inline-flex items-center" aria-label="KADOKA — strona główna">
          <img
            src={scrolled || open ? '/logo-dark.svg' : '/logo-light.svg'}
            alt="Logo KadoKa — Twój zielony ogród"
            className="h-10 md:h-12 w-auto"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-stone hover:text-leaf-800'
                  : 'text-white/85 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={company.phoneHref}
            className={`text-sm font-semibold transition-colors ${
              scrolled ? 'text-leaf-800' : 'text-white'
            }`}
          >
            {company.phone}
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
          className={`md:hidden relative h-10 w-10 ${
            scrolled || open ? 'text-leaf-800' : 'text-white'
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`absolute left-2 right-2 h-0.5 bg-current transition-all ${
              open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-3'
            }`}
          />
          <span
            className={`absolute left-2 right-2 top-1/2 h-0.5 -translate-y-1/2 bg-current transition-opacity ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute left-2 right-2 h-0.5 bg-current transition-all ${
              open ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-3'
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-leaf-100 bg-mist px-5 pb-8 pt-4">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={company.phoneHref}
              className="mt-2 btn-primary w-full"
              onClick={() => setOpen(false)}
            >
              Zadzwoń: {company.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
