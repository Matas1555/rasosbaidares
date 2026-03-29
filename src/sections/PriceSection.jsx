import Section from '../components/Section'
import phone from '../assets/phone.svg'
import mail from '../assets/mail.svg'
import location from '../assets/location-pin.svg'

const kayakPrices = [
  { label: 'Gegužė', price: '25€' },
  { label: 'Birželis', price: '30€' },
  { label: 'Liepa', price: '35€' },
  { label: 'Rugpjūtis', price: '35€' },
]

const cottagePrices = [
  { label: 'Sodyba', price: '170€' },
  { label: 'Pirtis', price: '60€' },
  { label: 'Kubilas', price: '60€' },
]

const contactItems = [
  {
    icon: phone,
    label: 'Telefono numeris',
    value: '+37064134102',
    href: 'tel:+37064134102',
  },
  {
    icon: mail,
    label: 'El. paštas',
    value: 'info@rasosbaidares.lt',
    href: 'mailto:info@rasosbaidares.lt',
  },
  {
    icon: location,
    label: 'Adresas',
    value: 'Liciškėnai, Ilgoji gatvė 28. (Prienų raj.)',
    href: 'https://maps.google.com/?q=Ilgoji+g.+21,+Lici%C5%A1k%C4%97nai',
  },
]

function PriceSection() {
  return (
    <Section id="price">
      <div className="relative z-10 text-center mb-20">
        <h1 className="relative mx-auto inline-block pb-2 text-5xl md:text-7xl font-semibold text-text-main after:absolute after:bottom-2 after:left-1/2 after:h-[2px] after:w-[calc(80%-1.5rem)] after:-translate-x-1/2 after:bg-primary-blue">
          Kaina
        </h1>
      </div>

      <div className="mx-auto grid max-w-6xl gap-20 lg:grid-cols-2">
        <div className="bg-background/70 p-4 md:p-6">
          <table className="w-full border-collapse text-left text-lg md:text-xl">
            <thead>
              <tr className="border-b-2 border-primary-blue">
              <th className="border-r-2 border-primary-blue px-4 py-3 font-semibold text-text-main"></th>
                <th className=" px-4 py-3 font-semibold text-text-main text-center">
                  Vienos baidarės kaina
                </th>
                
              </tr>
            </thead>
            <tbody>
              {kayakPrices.map((row) => (
                <tr key={row.label}>
                  <td className="border-r-2 border-primary-blue px-4 py-3 text-text-main font-semibold text-right">
                    {row.label}
                  </td>
                  <td className="px-4 py-3 text-text-main text-center">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-background/70 p-4 md:p-6">
          <table className="w-full border-collapse text-left text-lg md:text-xl">
            <thead>
                <tr className="border-b-2 border-primary-green"><th className="border-r-2 border-primary-green px-4 py-3 font-semibold text-text-main"></th>
                <th className=" px-4 py-3 font-semibold text-text-main text-center">
                  Stovyklavietė
                </th>
              </tr>
            </thead>
            <tbody>
              {cottagePrices.map((row) => (
                <tr key={row.label}>
                  <td className="border-r-2 border-primary-green px-4 py-3 text-text-main font-semibold text-right">
                    {row.label}
                  </td>
                  <td className="px-4 py-3 text-text-main text-center">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className='mt-5 text-text-main font-light text-lg text-center'>*Į stovyklavietę priimame tik vieną žmonių grupę, ne mažiau 12 žmonių.</p>
        </div>
      </div>

      <h3 className='text-center text-text-main mt-25 font-semibold text-lg'>Susisiekite su mumis ir rezervuokite savo nepamirštamų nuotykių kelionę jau šiandien!</h3>
      <div className="mx-auto mt-8 w-full max-w-6xl overflow-hidden rounded-2xl border-2 border-primary-green/50 shadow-sm">
        <iframe
          title="Rasos baidarės location map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1483.53315373987!2d24.208440617808737!3d54.60685001737211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e748d7d2dd20f1%3A0x132f25e6ee167716!2sIlgoji%20g.%2021%2C%20Lici%C5%A1k%C4%97nai%2C%2059430%20Prien%C5%B3%20r.%20sav.!5e1!3m2!1sen!2slt!4v1774736627966!5m2!1sen!2slt"
          className="h-[320px] w-full md:h-[420px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl gap-4 md:gap-6 lg:grid-cols-3">
        {contactItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.label === 'Adresas' ? '_blank' : undefined}
            rel={item.label === 'Adresas' ? 'noreferrer' : undefined}
            className="flex items-center gap-4 rounded-2xl border border-primary-green/35 bg-background/70 px-5 py-4 transition hover:bg-primary-green/10"
          >
            <img src={item.icon} alt="" aria-hidden="true" className="h-7 w-7 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-text-main">{item.label}</p>
              <p className="text-sm text-text-main/80 md:text-base">{item.value}</p>
            </div>
          </a>
        ))}
      </div>


    </Section>
  )
}

export default PriceSection
