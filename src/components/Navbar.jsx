import { useEffect, useState } from 'react'
import kayakIcon from '../assets/Kayak.svg'

const navItems = [
  { label: 'Apie', href: '#about' },
  { label: 'Baidarės', href: '#kayaks' },
  { label: 'Sodyba', href: '#cottage' },
  { label: 'Kainos', href: '#price' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCottageActive, setIsCottageActive] = useState(false)
  const phoneNumber = '+37064134102'

  useEffect(() => {
    const updateCottageState = () => {
      const section = document.getElementById('cottage')
      if (!section) return
    
      const rect = section.getBoundingClientRect()
      setIsCottageActive(rect.top <= 120 && rect.bottom > 120)
    }

    updateCottageState()
    window.addEventListener('scroll', updateCottageState, { passive: true })
    window.addEventListener('resize', updateCottageState)

    return () => {
      window.removeEventListener('scroll', updateCottageState)
      window.removeEventListener('resize', updateCottageState)
    }
  }, [])

  return (
    <header
      className={`sticky top-[-2px] z-50 border-b border-primary-blue/15 backdrop-blur transition-colors duration-300 ${
        isCottageActive ? 'bg-primary-green' : 'bg-text-main'
      }`}
    >
      <nav className="relative flex items-center gap-6 px-6 py-4 lg:px-8">
        <a
          href="#hero"
          className={`inline-flex items-center gap-2 text-sm md:text-lg/5 font-semibold tracking-wide text-background transition-colors  ${
            isCottageActive ? 'hover:text-text-main' : 'hover:text-secondary-blue'
          }`}
        >
          <span
            aria-hidden="true"
            className="h-8 w-8 md:h-10 md:w-10 shrink-0 bg-current"
            style={{
              WebkitMask: `url(${kayakIcon}) center / contain no-repeat`,
              mask: `url(${kayakIcon}) center / contain no-repeat`,
            }}
          />
          <span className="lg:text-sm">Rasos <br /> Baidarės</span>
        </a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className={`ml-auto inline-flex h-10 w-10 items-center justify-center text-background transition-colors hover:text-secondary-blue md:hidden ${
            isCottageActive ? 'hover:text-text-main' : 'hover:text-secondary-blue'
          }`}
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`h-7 w-7 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <ul className="hidden md:absolute md:left-1/2 md:flex md:-translate-x-1/2 md:items-center md:gap-10 md:text-sm md:text-background lg:gap-15">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`transition ${
                  isCottageActive ? 'hover:text-text-main' : 'hover:text-secondary-blue'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`tel:${phoneNumber}`}
          className={`ml-auto hidden text-sm font-semibold text-background transition md:inline-flex ${
            isCottageActive ? 'hover:text-text-main' : 'hover:text-secondary-blue'
          }`}
        >
          {phoneNumber}
        </a>

        <ul
          aria-hidden={!isMenuOpen}
          className={`absolute left-0 top-full flex w-full flex-col gap-2 overflow-hidden border border-primary-blue/20 p-4 text-md text-background shadow-lg transition-all duration-300 ease-in-out md:hidden ${
            isMenuOpen
              ? 'pointer-events-auto max-h-96 translate-y-0 opacity-100'
              : 'pointer-events-none max-h-0 -translate-y-2 opacity-0'
          } ${
            isCottageActive ? 'bg-primary-green' : 'bg-text-main'
          }`}
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded px-2 py-2 transition hover:bg-primary-blue/10 hover:text-secondary-blue"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`tel:${phoneNumber}`}
              onClick={() => setIsMenuOpen(false)}
              className={`block rounded px-2 py-2 font-semibold transition ${
                isCottageActive
                  ? 'hover:bg-text-main/10 hover:text-text-main'
                  : 'hover:bg-primary-blue/10 hover:text-secondary-blue'
              }`}
            >
              {phoneNumber}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
