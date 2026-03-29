import { useEffect, useMemo, useState } from 'react'
import Section from '../components/Section'
import wave from '../assets/section_wave.svg'

const WAVE_LAYOUT_POINTS = [
  { screen: 375, left: -40, top: 400, width: 420, height: 420, rotate: 0 },
  { screen: 640, left: -90, top: -50, width: 800, height: 900, rotate: 0 },
  { screen: 768, left: -100, top: 0, width: 900, height: 1000, rotate: 5 },
  { screen: 1024, left: -40, top: 100, width: 1100, height: 800, rotate: -4 },
  { screen: 1280, left: -40, top: -130, width: 1300, height: 1200, rotate: -6 },
  { screen: 1480, left: -40, top: -200, width: 2050, height: 1200, rotate: -10 },
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
        left: lerp(from.left, to.left),
        top: lerp(from.top, to.top),
        width: lerp(from.width, to.width),
        height: lerp(from.height, to.height),
        rotate: lerp(from.rotate, to.rotate),
      }
    }
  }

  return maxPoint
}

function AboutSection() {
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
    <Section
      id="about"
      className="relative overflow-visible bg-background pb-20 sm:pb-40 md:pb-60 md:pt-35 lg:pb-70 lg:pt-30 mt-20"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute z-0 bg-current text-primary-blue opacity-70"
        style={{
          left: `${waveLayout.left}px`,
          top: `${waveLayout.top}px`,
          width: `${waveLayout.width}px`,
          height: `${waveLayout.height}px`,
          transform: `rotate(${waveLayout.rotate}deg)`,
          WebkitMask: `url(${wave}) center / contain no-repeat`,
          mask: `url(${wave}) center / contain no-repeat`,
        }}
      />
      <div className="relative z-10 text-center">
        <h1 className="relative mx-auto inline-block pb-2 text-3xl md:text-6xl font-semibold text-text-main after:absolute after:bottom-1.5 after:left-1/2 after:h-[2px] after:w-[calc(65%-1.5rem)] after:-translate-x-1/2 after:bg-primary-blue">
          Apie mus
        </h1>
      </div>
      <div className="relative z-10 mt-10 mx-5 text-lg font-light sm:mx-10 md:mx-20 md:text-xl lg:mx-50">
        <p>
          Esame patyrę baidarių nuomos paslaugų teikėjai, įsikūrę  netoli Verknės upės. Mūsų tikslas suteikti jums nepamirštamą, pilną  džiaugsmingų akimirkų, nuotykių kelionę siaurais Verknės upės vingiais.
        </p>
        <br />
        <p>
          Po nuotykių upėje kviečiame apsistoti mūsų stovyklavietėje, kurioje  galėsite mėgautis nuostabiu gamtos grožiu. Taip pat galėsite mėgautis  maudynėmis tvenkinyje, pasikaitinti pirtyje arba kubile, pažaisti  tinklinio aikštelėje. 
        </p>
      </div>
    </Section>
  )
}

export default AboutSection
