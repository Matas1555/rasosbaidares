import Navbar from './components/Navbar'
import AboutSection from './sections/AboutSection'
import CottageSection from './sections/CottageSection'
import HeroSection from './sections/HeroSection'
import KayaksSection from './sections/KayaksSection'
import PriceSection from './sections/PriceSection'

function App() {
  return (
    <div className="min-h-screen bg-background text-text-main">
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <KayaksSection />
        <CottageSection />
        <PriceSection />
      </main>

      <footer className="border-t border-primary-blue/20 bg-text-main px-6 py-6 text-background lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
          <p className="text-sm">© 2025 rasosbaidares.lt. Visos teisės saugomos.</p>
          <a
            href="#hero"
            aria-label="Grįžti į puslapio viršų"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-background/50 text-background transition hover:border-secondary-blue hover:text-secondary-blue"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0-6 6m6-6 6 6" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
