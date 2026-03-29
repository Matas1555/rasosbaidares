import Section from '../components/Section'
import LightboxImage from '../components/LightboxImage'
import baidares1 from '../assets/pictures/baidares1.jpg'
import sodyba1 from '../assets/pictures/sodyba1.jpg'
import kubilas from '../assets/pictures/kubilas.jpg';
import tvenkinys1 from '../assets/pictures/tvenkinys1.jpg';
import tinklinis from '../assets/pictures/tinklinis.jpg';
import sodyba2 from '../assets/pictures/sodyba2.jpg';
import sodyba3 from '../assets/pictures/sodyba3.jpg';
import sodybaStalai from '../assets/pictures/sodyba_stalai.jpg';
import tvenkinys2 from '../assets/pictures/tvenkinys2.jpg';
import leaf1 from '../assets/leaf1.svg'
import leaf2 from '../assets/leaf2.svg'

const cottageFeatures = [
  'Spacious sleeping areas for larger groups',
  'Outdoor seating and slow evening atmosphere',
  'A flexible layout for family stays or group weekends',
  'Room to add gallery images, amenities, or extra notes later',
]

const leafDecorations = [
  { asset: leaf1, left: '-5%', top: '2%', size: 96, rotate: -28, opacity: 0.5 },
  { asset: leaf2, left: '4%', top: '8%', size: 56, rotate: 18, opacity: 0.45 },
  { asset: leaf1, left: '10%', top: '15%', size: 72, rotate: -12, opacity: 0.42 },
  { asset: leaf2, left: '2%', top: '24%', size: 64, rotate: 56, opacity: 0.4 },
  { asset: leaf1, left: '12%', top: '32%', size: 102, rotate: -36, opacity: 0.35 },
  { asset: leaf2, left: '6%', top: '41%', size: 58, rotate: 8, opacity: 0.44 },
  { asset: leaf1, left: '-2%', top: '50%', size: 88, rotate: 74, opacity: 0.37 },
  { asset: leaf2, left: '9%', top: '58%', size: 62, rotate: -18, opacity: 0.43 },
  { asset: leaf1, left: '3%', top: '67%', size: 110, rotate: -8, opacity: 0.34 },
  { asset: leaf2, left: '11%', top: '75%', size: 54, rotate: 28, opacity: 0.41 },
  { asset: leaf1, left: '-4%', top: '84%', size: 98, rotate: -44, opacity: 0.36 },
  { asset: leaf2, left: '8%', top: '92%', size: 60, rotate: 14, opacity: 0.4 },

  { asset: leaf1, left: '88%', top: '3%', size: 100, rotate: 34, opacity: 0.44 },
  { asset: leaf2, left: '94%', top: '10%', size: 52, rotate: -24, opacity: 0.47 },
  { asset: leaf1, left: '82%', top: '18%', size: 76, rotate: 12, opacity: 0.4 },
  { asset: leaf2, left: '90%', top: '26%', size: 66, rotate: -52, opacity: 0.43 },
  { asset: leaf1, left: '86%', top: '34%', size: 108, rotate: 42, opacity: 0.35 },
  { asset: leaf2, left: '92%', top: '42%', size: 58, rotate: -10, opacity: 0.46 },
  { asset: leaf1, left: '84%', top: '51%', size: 92, rotate: -68, opacity: 0.38 },
  { asset: leaf2, left: '95%', top: '59%', size: 56, rotate: 20, opacity: 0.44 },
  { asset: leaf1, left: '81%', top: '68%', size: 114, rotate: -16, opacity: 0.34 },
  { asset: leaf2, left: '89%', top: '76%', size: 62, rotate: 38, opacity: 0.42 },
  { asset: leaf1, left: '93%', top: '85%', size: 90, rotate: -46, opacity: 0.36 },
  { asset: leaf2, left: '85%', top: '93%', size: 54, rotate: 6, opacity: 0.4 },

  { asset: leaf2, left: '22%', top: '22%', size: 48, rotate: -12, opacity: 0.28 },
  { asset: leaf1, left: '74%', top: '29%', size: 68, rotate: 18, opacity: 0.26 },
  { asset: leaf2, left: '28%', top: '47%', size: 52, rotate: 42, opacity: 0.27 },
  { asset: leaf1, left: '70%', top: '55%', size: 74, rotate: -22, opacity: 0.24 },
  { asset: leaf2, left: '33%', top: '71%', size: 50, rotate: -35, opacity: 0.26 },
  { asset: leaf1, left: '67%', top: '79%', size: 70, rotate: 30, opacity: 0.25 },
]

function CottageSection() {
  return (
    <Section id="cottage" className="relative mt-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0">
        {leafDecorations.map((leaf, index) => (
          <img
            key={`${leaf.asset}-${index}`}
            src={leaf.asset}
            alt=""
            aria-hidden="true"
            className="absolute"
            style={{
              left: leaf.left,
              top: leaf.top,
              width: `${leaf.size}px`,
              height: `${leaf.size}px`,
              opacity: leaf.opacity,
              transform: `rotate(${leaf.rotate}deg)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center mb-10">
        <h1 className="relative mx-auto inline-block pb-2 text-5xl md:text-7xl font-semibold text-text-main after:absolute after:bottom-2 after:left-1/2 after:h-[2px] after:w-[72%] after:-translate-x-1/2 after:bg-primary-green">
          Sodyba
        </h1>
      </div>

      <div>
        <div className="relative z-10 mx-5 mt-20 flex flex-col xl:flex-row xl:mt-40 lg:pb-10">
          <div className="bg-primary-green/30 p-10 pb-40 md:pb-70 xl:w-6/12 xl:pb-10">
            <div className="relative z-10">
              <h1 className="relative mx-auto inline-block pb-2 mb-5 text-2xl md:text-4xl xl:text-5xl font-semibold text-text-main after:absolute after:bottom-1.5 after:left-1/2 after:h-[2px] after:w-[72%] after:-translate-x-1/2 after:bg-primary-green">
                Stovyklavietė
              </h1>
            </div>
            <div className="xl:text-2xl xl:font-light xl:pr-10">
              <p>Jeigu jaučiate natūralumo ir laisvės troškimą, rinkitės mūsų didelę ir  jaukią stovyklavimo zoną. Išbandykite stovyklavimo teikiamą džiaugsmą  kartu su artimaisiais ir turėkite nepamirštamas akimirkas drauge!</p>
            </div>
          </div>
          <div className="-translate-y-30 md:-translate-y-50 xl:-translate-y-10 xl:relative xl:flex xl:w-6/12 xl:flex-col xl:gap-5 xl:items-center xl:mr-10">
            <div className="relative flex w-full justify-center">
              <span
                aria-hidden="true"
                className="hidden xl:flex absolute inset-0 z-0 -translate-y-5 translate-x-37 bg-primary-green/30 w-4/5"
              />
              <LightboxImage
                src={sodyba1}
                alt="Stovyklavietė"
                className="photo-hover z-10 w-11/12 xl:w-[110%] max-w-none xl:mr-10"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="relative z-10 mx-5 flex flex-col xl:flex-row xl:mt-30 pb-5 lg:pb-10">
          <div className="hidden -translate-y-70 xl:-translate-y-10 xl:relative xl:flex xl:flex-col xl:gap-5 xl:items-center xl:ml-10 xl:w-6/12">
            <div className="relative flex w-full justify-center">
              <span
                aria-hidden="true"
                className="hidden xl:flex absolute inset-0 z-0 -translate-x-20 -translate-y-5 bg-primary-green/30"
              />
              <LightboxImage
                src={kubilas}
                alt="Kubilas"
                className="photo-hover z-10 mx-auto w-11/12 xl:w-[120%] max-w-none"
              />
            </div>
          </div>
          <div className="w-12/12 bg-primary-green/30 p-10 pb-30 md:pb-80  xl:text-right xl:pb-10 xl:w-7/12">
            <div className="relative z-10">
              <h1 className="relative ml-auto inline-block pb-2 mb-5 text-2xl md:text-4xl xl:text-5xl font-semibold text-text-main after:absolute after:bottom-1.5 after:left-1/2 after:h-[2px] after:w-[72%] after:-translate-x-1/2 after:bg-primary-green">
              Kubilas ir pirtis
              </h1>
            </div>
            <div className="xl:pl-10 xl:text-2xl xl:font-light">
              <p>Leiskite sau išskirtinį atsipalaidavimo ir malonumo patyrimą mūsų šiltame kubile. Taip pat, siūlome pasinerti į giliausią atsipalaidavimo patirtį mūsų tradicinėje  pirtyje. Leiskite garui ir šilumai išvalyti jūsų kūną, atgaivinti ir  pamiršti visus dienos rūpesčius.</p>
            </div>
          </div>
          <div className="mb-[-10vh] xl:hidden -translate-y-25 md:-translate-y-65 xl:-translate-y-10 xl:trans xl:relative xl:flex xl:flex-col xl:gap-5 xl:items-center xl:ml-10">
            <div className="relative flex w-full justify-center">
              <span
                aria-hidden="true"
                className="hidden xl:flex absolute inset-0 z-0 -translate-x-20 -translate-y-5 bg-primary-green/30"
              />
              <LightboxImage
                src={kubilas}
                alt="Pirtis ir kubilas"
                className="photo-hover z-10 mx-auto w-11/12 xl:w-full max-w-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="relative z-10 mx-5 mt-15 flex flex-col xl:flex-row xl:mt-40 pb-5 lg:pb-10">
          <div className="w-12/12 bg-primary-green/30 p-10 pb-40 md:pb-75 xl:pb-10 xl:w-6/12">
            <div className="relative z-10">
              <h1 className="relative mx-auto inline-block pb-2 mb-5 text-2xl md:text-4xl xl:text-5xl font-semibold text-text-main after:absolute after:bottom-1.5 after:left-1/2 after:h-[2px] after:w-[72%] after:-translate-x-1/2 after:bg-primary-green">
                Tvenkinys
              </h1>
            </div>
            <div className="xl:text-2xl xl:font-light xl:pr-10">
              <p>Mūsų sodyboje taip pat rasite didelį tvenkinį, kuriame galėsite  atsivėsinti karštą vasaros dieną ir mėgautis vandens teikiamais  malonumais.</p>
            </div>
          </div>
          <div className="-translate-y-25 md:-translate-y-60 xl:-translate-y-10 xl:relative xl:flex xl:flex-col xl:gap-5 xl:items-center xl:mr-10 xl:w-6/12">
            <div className="relative flex w-full justify-center">
              <span
                aria-hidden="true"
                className="hidden xl:flex absolute inset-0 z-0 translate-x-20 -translate-y-5 bg-primary-green/30"
              />
              <LightboxImage
                src={tvenkinys1}
                alt="Tvenkinys"
                className="photo-hover z-10 mx-auto w-11/12 xl:w-[120%] max-w-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="relative z-10 mx-5 flex flex-col xl:flex-row xl:mt-40 mb-10 lg:pb-10">
          <div className="hidden -translate-y-70 xl:-translate-y-10 xl:relative xl:flex xl:flex-col xl:gap-5 xl:items-center xl:ml-10 xl:w-6/12">
            <div className="relative flex w-full justify-center">
              <span
                aria-hidden="true"
                className="hidden xl:flex absolute inset-0 z-0 -translate-x-20 -translate-y-5 bg-primary-green/30"
              />
              <LightboxImage
                src={tinklinis}
                alt="Tinklinio aikštelė"
                className="photo-hover z-10 mx-auto w-11/12 xl:w-[120%] max-w-none"
              />
            </div>
          </div>
          <div className="w-12/12 bg-primary-green/30 p-10 pb-40 md:pb-65 xl:text-right xl:pb-10 xl:w-7/12">
            <div className="relative z-10">
              <h1 className="relative ml-auto inline-block pb-2 mb-5 text-2xl md:text-4xl xl:text-5xl font-semibold text-text-main after:absolute after:bottom-1.5 after:left-1/2 after:h-[2px] after:w-[72%] after:-translate-x-1/2 after:bg-primary-green">
              Tinklinis
              </h1>
            </div>
            <div className="xl:pl-10 xl:text-2xl xl:font-light">
              <p>Tinklinio mėgėjams suteiksime galimybę išreikšti savo sportinį  potencialą. Su šeima ar draugais praleiskite smagų laiką žaisdami  tinklinį ir džiaukitės aktyviu laisvalaikiu gamtos apsuptyje.</p>
            </div>
          </div>
          <div className="xl:hidden -translate-y-25 md:-translate-y-55 xl:-translate-y-10 xl:trans xl:relative xl:flex xl:flex-col xl:gap-5 xl:items-center xl:ml-10">
            <div className="relative flex w-full justify-center">
              <span
                aria-hidden="true"
                className="hidden xl:flex absolute inset-0 z-0 -translate-x-20 -translate-y-5 bg-primary-green/30"
              />
              <LightboxImage
                src={tinklinis}
                alt="Tinklinis"
                className="photo-hover z-10 mx-auto w-11/12 xl:w-[120%] max-w-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-5 mt-16">
        <h2 className="relative mx-auto mb-8 inline-block pb-2 text-3xl font-semibold text-text-main md:text-4xl after:absolute after:bottom-1.5 after:left-1/2 after:h-[2px] after:w-[72%] after:-translate-x-1/2 after:bg-primary-green">
          Nuotraukų galerija
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="md:col-span-2">
            <LightboxImage
              src={tvenkinys2}
              alt="Tvenkinys"
              className="photo-hover h-72 w-full object-cover md:h-[420px]"
            />
          </div>

          <LightboxImage
            src={sodyba2}
            alt="Sodybos vaizdas"
            className="photo-hover h-60 w-full object-cover md:h-[200px] lg:h-[420px]"
          />

          <LightboxImage
            src={sodybaStalai}
            alt="Sodybos stalai"
            className="photo-hover h-60 w-full object-cover md:h-[200px] lg:h-[420px]"
          />

          <div className="md:col-span-2 lg:col-span-4">
            <LightboxImage
              src={sodyba3}
              alt="Sodybos aplinka"
              className=" photo-hover h-72 w-full object-cover md:h-[320px]"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default CottageSection
