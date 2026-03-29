import { useEffect, useMemo, useState } from 'react'
import Section from '../components/Section'
import LightboxImage from '../components/LightboxImage'
import baidares1 from '../assets/pictures/baidares1.jpg'
import baidares2 from '../assets/pictures/baidares2.jpg'
import wave from '../assets/section_wave.svg'

const WAVE_LAYOUT_POINTS = [
  { screen: 375, right: -40, top: 1150, width: 450, height: 420, rotate: 8 },
  { screen: 640, right: -90, top: 600, width: 900, height: 900, rotate: 10 },
  { screen: 768, right: -100, top: 400, width: 900, height: 1000, rotate: 5 },
  { screen: 1024, right: -40, top: 550, width: 1250, height: 1000, rotate: -4 },
  { screen: 1280, right: -40, top: 420, width: 2100, height: 1200, rotate: -6 },
]

function interpolateWaveLayout(viewportWidth) {
  const minPoint = WAVE_LAYOUT_POINTS[0]
  const maxPoint = WAVE_LAYOUT_POINTS[WAVE_LAYOUT_POINTS.length - 1]

  if (viewportWidth <= minPoint.screen) return minPoint
  if (viewportWidth >= maxPoint.screen) return maxPoint

  for (let i = 0; i < WAVE_LAYOUT_POINTS.length - 1; i += 1) {
    const from = WAVE_LAYOUT_POINTS[i]
    const to = WAVE_LAYOUT_POINTS[i + 1]

    if (viewportWidth >= from.screen && viewportWidth <= to.screen) {
      const progress = (viewportWidth - from.screen) / (to.screen - from.screen)
      const lerp = (start, end) => start + (end - start) * progress

      return {
        right: lerp(from.right, to.right),
        top: lerp(from.top, to.top),
        width: lerp(from.width, to.width),
        height: lerp(from.height, to.height),
        rotate: lerp(from.rotate, to.rotate),
      }
    }
  }

  return maxPoint
}

function KayaksSection() {
  const [viewportWidth, setViewportWidth] = useState(
    typeof window === 'undefined' ? 1280 : window.innerWidth,
  )

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const waveLayout = useMemo(
    () => interpolateWaveLayout(viewportWidth),
    [viewportWidth],
  )

  return (
    <Section id="kayaks" className="relative">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute z-0 bg-current text-primary-blue"
        style={{
          right: `${waveLayout.right}px`,
          top: `${waveLayout.top}px`,
          width: `${waveLayout.width}px`,
          height: `${waveLayout.height}px`,
          transform: `scaleX(-1) rotate(${waveLayout.rotate}deg)`,
          WebkitMask: `url(${wave}) center / contain no-repeat`,
          mask: `url(${wave}) center / contain no-repeat`,
        }}
      />

      <div className="relative z-10 mx-auto flex flex-col gap-6 md:mb-30 md:pb-60 xl:mt-40 xl:flex-row">
        <div className='flex-row w-12/12'>
          <div className="relative z-10 text-center">
            <h1 className="relative mx-auto inline-block pb-2 mb-5 text-3xl md:text-6xl font-semibold text-text-main after:absolute after:bottom-1.5 md:after:left-33 after:left-18 xl:after:left-25 after:h-[2px] after:w-[calc(80%-1.5rem)] after:-translate-x-1/2 after:bg-primary-blue">
              Baidarės
            </h1>
          </div>
          <div className="w-12/12 bg-secondary-blue/20 p-10 rounded-2xl">

            <div className="lg:text-2xl lg:font-light lg:pr-10">
              <p>Leiskitės į nepamirštamą kelionę nuostabiais Verknės upės vingiais. Maršrutai puikiai tinka tiek pradedantiesiems, tiek ieškantiems šiek tiek daugiau nuotykių.</p>
              <br />
              <p>Pasirūpinsime viskuo, ko reikia sklandžiai išvykai: suteiksime baidares, irklus, gelbėjimosi liemenes bei padėsime su logistika. Jums tereikia atsipalaiduoti, mėgautis gamta ir gera kompanija.</p>
              <br />
              <p>Tai puikus būdas pabėgti nuo kasdienybės, praleisti laiką su draugais ar šeima ir susikurti prisiminimus, kurie išliks ilgam.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:hidden">
          <div className="relative flex">
            <span
              aria-hidden="true"
              className="absolute inset-0 z-0 translate-x-3 -translate-y-3 rounded-2xl bg-secondary-blue/20"
            />
            <LightboxImage
              src={baidares2}
              alt="Baidarių nuoma"
              className="photo-hover relative z-10 h-64 w-full rounded-2xl object-cover"
            />
          </div>

          <div className="relative flex">
            <span
              aria-hidden="true"
              className="absolute inset-0 z-0 translate-x-3 xl:-translate-x-3 xl:translate-y-3 -translate-y-3 rounded-2xl bg-secondary-blue/20"
            />
            <LightboxImage
              src={baidares1}
              alt="Baidarių maršrutas"
              className="photo-hover relative z-10 h-64 w-full rounded-2xl object-cover"
            />
          </div>
        </div>

        <div className="hidden -translate-y-10 -translate-x-10 xl:relative xl:flex xl:flex-col xl:gap-5">
          <div className="relative flex">
            <span
              aria-hidden="true"
              className="absolute inset-0 z-0 translate-x-30 -translate-y-5 bg-secondary-blue/20 w-3/4 rounded-2xl"
            />
            <LightboxImage
              src={baidares2}
              alt="Baidarių nuotrauka"
              className="photo-hover z-10 w-11/12 rounded-2xl"
            />
          </div>

          <div className="relative flex">
            <span
              aria-hidden="true"
              className="absolute inset-0 z-0 translate-x-30 translate-y-5 bg-secondary-blue/20 w-3/4 rounded-2xl"
            />
            <LightboxImage
              src={baidares1}
              alt="Baidarių plaukimas"
              className="photo-hover z-10 w-11/12 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default KayaksSection
