import Image from 'next/image'
import { Fragment, useRef } from 'react'
import { PageHeader } from '../components/PageHeader.tsx/PageHeader'
import styles from '../styles/Oferta.module.css'
import Button from '../components/Button/Button'
import { useRouter } from 'next/router'
import IconImg1 from '../public/assets/offer/icons/Icon1.svg'
import IconImg2 from '../public/assets/offer/icons/Icon2.svg'
import IconImg3 from '../public/assets/offer/icons/Icon3.svg'
import IconImg4 from '../public/assets/offer/icons/Icon4.svg'
import IconImg5 from '../public/assets/offer/icons/Icon5.svg'
import IconImg6 from '../public/assets/offer/icons/Icon6.svg'
import IconImg7 from '../public/assets/offer/icons/Icon7.svg'
import IconImg8 from '../public/assets/offer/icons/Icon8.svg'
import whatMakesUsStandOutMobile from '../public/assets/offer/whatMakesUsStandOutMobile.png'
import extracurricularActivitiesMobile from '../public/assets/offer/extracurricularActivitiesMobile.png'
import activityClubsMobile from '../public/assets/offer/activityClubsMobile.png'
import useWindowDimensions from '../hooks/useWindowDimensions'
import IconsDestkop from '../public/assets/offer/icons/iconsDesktop.svg'

const icons = [
  {
    name: 'Rozwijamy',
    url: IconImg1,
    color: 'bg-[#FF9D42]',
  },
  {
    name: 'Poznajemy',
    url: IconImg2,
    color: 'bg-[#34689F]',
  },
  {
    name: 'Odkrywamy',
    url: IconImg3,
    color: 'bg-[#C10210]',
  },
  {
    name: 'Eksperymentujemy',
    url: IconImg4,
    color: 'bg-[#529F47]',
  },
  {
    name: 'Poszukujemy',
    url: IconImg5,
    color: 'bg-[#E6255A]',
  },
  {
    name: 'Doskonalimy',
    url: IconImg6,
    color: 'bg-[#73122C]',
  },
  {
    name: 'Badamy',
    url: IconImg7,
    color: 'bg-[#284B8F]',
  },
  {
    name: 'Zdobywamy',
    url: IconImg8,
    color: 'bg-[#E50B1C]',
  },
]

const awards = [
  'Serdeczna atmosfera',
  'Wysoki poziom bezpieczeństwa: monitoring, domofon, ochrona',
  'Język angielski i native speaker od klasy 1',
  'Drugi język obcy od klasy 3: hiszpański lub niemiecki',
  'Edukacja teatralna',
  'Basen',
  'Judo',
  'Sala Integracji Sensorycznej',
  'Opieka pedagoga, psychologa, logopedy, rehabilitanta',
  'Biała szkoła - wyjazdy narciarskie',
  'Zielona szkoła - zawsze nad morzem!',
  'Wycieczki dydaktyczne - nauczanie przez działanie',
  'Współpraca z instytucją kultury "Miasto Ogrodów" w Katowicach',
  'Współpraca z Wydziałem Edukacji Artystycznej Akademii Muzycznej w Katowicach',
]

const extraCurricularActivities = [
  'Tenis ziemny, stołowy',
  'Aikido',
  'Szachy',
  'Mathriders',
  'Pianino',
  'Igłomania',
  'Robotyka',
  'Szkoła tańca',
  'Wakacyjne obozy sportowe',
  'Wyjazdy weekendowe',
]

const activityClubs = [
  'Język angielski, hiszpański, niemiecki',
  'Matematyczne',
  'Fizyczne',
  'Chemiczne',
  'Biologiczne',
  'Informatyczne',
  'Polonistyczne',
  'Historyczne',
  'Plastyczne',
  'Muzyczne',
  'Chór "Omega Voce"',
  'Geograficzne kółko turystyczne',
  'SKS piłka nożna',
  'Gimnastyka artystyczna',
  'Gimnastyka korekcyjna, rehabilitacja ruchowa /ze wskazaniem lekarskim/',
  'Cyberfan',
  'Akademia młodego grafika',
  'Arteterapia',
  'Englishfan',
  'Salonik polonistyczny',
  'Klub mistrzów gier planszowych',
  'Fabryka kreatywności',
]

const Icon = ({ name, icon, color }: { name: string; icon: any; color: string }) => {
  return (
    <div className={`${color} ${styles['circle-icon']}`}>
      <div className={styles['circle-icon-image-container']}>
        <Image
          src={icon}
          alt={name}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>
      <p className={styles['circle-icon-text']}>{name}</p>
    </div>
  )
}

const Offer = () => {
  const router = useRouter()
  const { width } = useWindowDimensions()
  const ref = useRef<HTMLDivElement>(null)

  const executeScroll = () => {
    if (ref?.current?.offsetTop)
      window.scroll({
        top:
          ref?.current?.offsetTop! -
          (width && width > 1280 ? 0 : width && (width < 768 ? 60 : 100))!,
        left: 0,
        behavior: 'smooth',
      })
  }
  return (
    <Fragment>
      <PageHeader
        bgUrl="bg-[url(/assets/headers/bgOfferMobile.svg)]"
        bgXlUrl="xl:bg-[url(/assets/headers/bgOfferDesktop.svg)]"
        title="Dlaczego warto"
        titleSpan="nas wybrać?"
        paragraph="Jeżeli zastanawiasz się jakie miejsce będzie
        najlepsze dla Twojego dziecka, chętnie przekonamy
        Cię, że to właśnie OMEGA"
        buttonTitle="Sprawdź dlaczego"
        textContainerStyles={styles['page-header-text']}
        onClick={executeScroll}
      />
      <div
        ref={ref}
        className="pt-5xl:w-full xl:flex xl:px-[110px] xl:py-12 2xl:px-[200px] max-w-[1920px] mx-auto"
      >
        <div className={styles['gray-circle-container']}>
          <p className={styles['gray-circle-paragraph']}>
            Zawsze dostosowana do <br className="hidden xs:block" /> potrzeb i uzdolnień naszych
            uczniów
          </p>
          <h2 className={styles['gray-circle-header']}>
            od ponad <span>30 LAT</span>
          </h2>
          <p className={`${styles['gray-circle-paragraph']}`}>
            współpracujemy, <br className="hidden " /> współdziałamy,
            <br className="hidden xl:block" />
            współtworzymy!
          </p>
        </div>
        <div className={styles['circle-icons-container']}>
          {width && width < 1280 ? (
            icons.map((icon) => (
              <Icon key={icon.name} color={icon.color} name={icon.name} icon={icon.url} />
            ))
          ) : (
            <Image
              className="w-full h-name"
              src={IconsDestkop}
              alt="Rozwijamy, Pozajemy, Zdobywamy, Odkrywamy, Eksperementujemy, Poszukujemy, Doskonalimy, Badamy"
            />
          )}
        </div>
      </div>
      <div className={styles['section-container']}>
        <div className="xl:w-1/2">
          <h3 className={`mt-[-50px] ${styles['section-header']}`}>Co nas wyróżnia?</h3>
          {awards.map((award, index) => (
            <p key={index} className={styles['section-item']}>
              {award}
            </p>
          ))}
        </div>
        <div className={styles['section-images-container']}>
          <Image src={whatMakesUsStandOutMobile} alt="Co nas wyróżnia" />
        </div>
      </div>

      <div className={` flex-row-reverse  ${styles['section-container']}`}>
        <div className="xl:w-1/2">
          <h3 className={styles['section-header']}>Oferta zajęć pozalekcyjnych w czesnym</h3>
          {activityClubs.map((activityClub, index) => (
            <p key={index} className={styles['section-item']}>
              {activityClub}
            </p>
          ))}
        </div>
        <div className={styles['section-images-container']}>
          <Image src={extracurricularActivitiesMobile} alt="Co nas wyróżnia" />
        </div>
      </div>

      <div className={styles['section-container']}>
        <div className="xl:w-1/2">
          <h3 className={styles['section-header']}>
            Oferta zajęć pozalekcyjnych dodatkowo płatnych
          </h3>

          {extraCurricularActivities.map((activity, index) => (
            <p key={index} className={styles['section-item']}>
              {activity}
            </p>
          ))}
        </div>
        <div className={` ${styles['section-images-container']}`}>
          <Image src={activityClubsMobile} alt="Co nas wyróżnia" />
        </div>
      </div>
      <div className={`${styles['button-container']} ${styles['section-container']}`}>
        <Button
          label="Zapisz swoje dziecko do nas"
          onClick={() => router.replace('/rekrutacja')}
          textColor="text-white"
          buttonColor="bg-[#FAC13C]"
        />
      </div>
    </Fragment>
  )
}

export default Offer
