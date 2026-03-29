import wave from '../assets/hero_wave.svg'
import squiggle from '../assets/hero_squiggle.svg'
import verkne from '../assets/pictures/verkne-gallery-3.jpg'
import LightboxImage from '../components/LightboxImage'

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden scroll-mt-26 bg-text-main px-6 pb-40 pt-40 lg:px-10 lg:pb-70 lg:pt-34"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-70 -top-96 lg:-top-120 lg:-right-120 h-[900px] w-[900px] lg:h-[1300px] lg:w-[1300px] bg-current text-primary-blue/60"
        style={{
          WebkitMask: `url(${wave}) center / contain no-repeat`,
          mask: `url(${wave}) center / contain no-repeat`,
        }}
      />
      <img
        src={squiggle}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 bottom-8 lg:bottom-20 h-[200px] w-[300px] lg:h-[200px] lg:w-[800px] opacity-40"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.5fr_0.55fr] lg:items-center">
        <div className="flex flex-col gap-6 py-4 lg:py-8">
          <h1 className="max-w-6xl text-5xl font-semibold leading-[1.1] tracking-tight text-yellow sm:text-6xl">
            Atraskite ramybę ir nuotykius <span className="inline-block py-1 text-secondary-blue">Verknės</span> upėje
          </h1>
          <p className="max-w-6xl text-md leading-8 text-background">
            Leiskite sau pabėgti į gamtą, kur laukia poilsis, pirtis ir nepamirštamos akimirkos!
          </p>

          <div className="mt-24 flex flex-wrap">
            <a
              href="#price"
              className="rounded-full border-2 bg-yellow px-6 py-3 text-sm font-semibold text-text-main transition hover:border-yellow hover:bg-text-main hover:text-background"
            >
              Sužinokite daugiau
            </a>
          </div>
        </div>
        <div className="relative hidden lg:flex lg:justify-self-end">
          <span
            aria-hidden="true"
            className="absolute inset-0 z-0 translate-x-5 translate-y-5 rounded-4xl bg-secondary-blue/20"
          />
          <LightboxImage
            src={verkne}
            alt="Verknės upės vaizdas"
            className="photo-hover relative z-10 w-full max-w-[1040px] rounded-4xl"
          />
        </div>
        
      </div>
    </section>
  )
}

export default HeroSection
