import Image from 'next/image'
import { Fragment } from 'react'
import { PageHeader } from '../components/PageHeader.tsx/PageHeader'
import IconImg1 from '../public/assets/offer/icons/Icon1.svg'
import IconImg2 from '../public/assets/offer/icons/Icon2.svg'
import IconImg3 from '../public/assets/offer/icons/Icon3.svg'
import IconImg4 from '../public/assets/offer/icons/Icon4.svg'
import IconImg5 from '../public/assets/offer/icons/Icon5.svg'
import IconImg6 from '../public/assets/offer/icons/Icon6.svg'
import IconImg7 from '../public/assets/offer/icons/Icon7.svg'
import IconImg8 from '../public/assets/offer/icons/Icon8.svg'
import AwardBigImage from '../public/assets/offer/AwardBigImage.png'
import AwardSmallImage from '../public/assets/offer/AwardSmallImage.png'
import ActivityBigImage from '../public/assets/offer/ActivityBigImage.png'
import ActivitySmallImage from '../public/assets/offer/ActivitySmallImage.png'
import ActivityClubSmallImage from '../public/assets/offer/ActivityClubSmallImage.png'
import ActivityClubMediumImage from '../public/assets/offer/ActivityClubMediumImage.png'
import ActivityClubBigImage from '../public/assets/offer/ActivityClubBigImage.png'

import styles from '../styles/Oferta.module.css'
import Button from '../components/Button/Button'
import { useRouter } from 'next/router'
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
  'Język angielski i native speaker od 1 klasy',
  'Drugi język obcy od 3 klasy: hiszpański lub niemiecki',
  'Edukacja teatralna',
  'Basen',
  'Judo',
  'Sala integracji sensorycznej',
  'Opieka pedagoga, psychologa, logopedy, rehabilitacja',
  'Biała szkoła (wyjazdy narciarskie)',
  'Zielona szkoła (zawsze nad morzem)',
]

const extraCurricularActivities = [
  'Tenis ziemny, stołowy',
  'Aikido',
  'Szachy',
  'Mathriders',
  'Pianino',
  'Igłomania',
  'Gry planszowe',
  'Wakacyjne obozy sportowe',
  'Wyjazdy weekendowe',
  'Robotyka',
  'Tańce',
  'Szkoła tańca',
]

const activityClubs = [
  'Język angielski, hiszpański, niemiecki',
  'Matematyczne',
  'Fizyczne',
  'Informatyczne',
  'Chemiczne',
  'Biologiczne',
  'Polonistyczne',
  'Historyczne',
  'Geograficzne kółko turystyczne',
  'Muzyczne',
  'SKS piłka nożna',
  'Gimnastyka artystyczna, korekcyjna,rehabilitacja ruchowa',
  'Taniec',
  'Cyberfan',
  'Akademia młodego grafika',
  'Artoterapia',
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
          alt="ICON"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>
      <p className={styles['circle-icon-text']}>{name}</p>
    </div>
  )
}

const Offer = () => {
  const router = useRouter()
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
        onClick={() => null}
      />
      <div className="pt-5">
        <div className={styles['gray-circle-container']}>
          <p className={styles['gray-circle-paragraph']}>
            Zawsze dostosowana do <br className="hidden xs:block" /> potrzeb i uzdolnień naszych
            uczniów
          </p>
          <h2 className={styles['gray-circle-header']}>
            od ponad <span>30 LAT</span>
          </h2>
          <p className={styles['gray-circle-paragraph']}>
            współpracujemy, współdziałamy, współtworzymy!
          </p>
        </div>
        <div className={styles['circle-icons-container']}>
          {icons.map((icon) => (
            <Icon key={icon.name} color={icon.color} name={icon.name} icon={icon.url} />
          ))}
        </div>
      </div>
      <div className={styles['section-container']}>
        <div>
          <h3 className={`mt-[-50px] ${styles['section-header']}`}>Co nas wyróżnia?</h3>
          {awards.map((award, index) => (
            <p key={index} className={styles['section-item']}>
              {award}
            </p>
          ))}
        </div>
        <div className={styles['section-images-container']}>
          <div className="w-3/4 self-end	mr-3 z-[-1]">
            <Image src={AwardBigImage} alt="AwardGroupImage" />
          </div>
          <div className="absolute bottom-[-20px] w-1/2 z-[2]">
            <Image src={AwardSmallImage} alt="AwardSmallImage" />
          </div>

          <div className="w-[70px] h-[70px] rounded-full absolute bg-[#579CE2] z-[1] top-[95px] left-[30px]"></div>
          <div className="w-[15px] h-[15px] rounded-full absolute bg-[#FAC13C] z-[1] top-[75px] left-[30px]"></div>
          <div className="w-[9px] h-[9px] rounded-full absolute bg-[#FAC13C] z-[21] top-[180px] left-[160px]"></div>
        </div>
      </div>

      <div className={styles['section-container']}>
        <div>
          <h3 className={styles['section-header']}>Oferta zajęc pozalekcyjnych</h3>
          {extraCurricularActivities.map((activity, index) => (
            <p key={index} className={styles['section-item']}>
              {activity}
            </p>
          ))}
        </div>
        <div className={styles['section-images-container']}>
          <div className="w-3/4	mr-3 z-[-1]">
            <Image src={ActivityBigImage} alt="ActivityBigImage" />
          </div>
          <div className="absolute bottom-[-20px] right-3 mr-3 w-1/2 z-[2]">
            <Image src={ActivitySmallImage} alt="ActivitySmallImage" />
          </div>

          <div className="w-[70px] h-[70px] rounded-full absolute bg-[#FAC13C] z-[1] top-[105px] right-[50px]"></div>
          <div className="w-[15px] h-[15px] rounded-full absolute bg-[#579CE2] z-[1] top-[75px] right-[50px]"></div>
          <div className="w-[9px] h-[9px] rounded-full absolute bg-[#FAC13C] z-[21] top-[100px] right-[40px]"></div>
          <div className="w-[9px] h-[9px] rounded-full absolute bg-[#FAC13C] z-[21] top-[180px] left-[100px]"></div>
        </div>
      </div>

      <div className={styles['section-container']}>
        <div>
          <h3 className={styles['section-header']}>Kółka przedmiotowe</h3>
          {activityClubs.map((activityClub, index) => (
            <p key={index} className={styles['section-item']}>
              {activityClub}
            </p>
          ))}
        </div>
        <div className={styles['section-images-container']}>
          <div className="w-3/4	mr-3 z-[-1] self-end">
            <Image src={ActivityClubBigImage} alt="ActivityBigImage" />
          </div>
          <div className="absolute bottom-[-40px] left-3 w-2/5 z-[2]">
            <Image src={ActivityClubSmallImage} alt="ActivityClubSmallImage" />
          </div>

          <div className="absolute bottom-[-20px] right-3 mr-2 w-1/2 z-[2]">
            <Image src={ActivityClubMediumImage} alt="ActivityClubMediumImage" />
          </div>
          <div className="w-[35px] h-[35px] rounded-full absolute bg-[#579CE2] z-[1] top-[125px] right-[20px]"></div>
          <div className="w-[10px] h-[10px] rounded-full absolute bg-[#FAC13C] z-[1] top-[105px] right-[20px]"></div>
          <div className="w-[40px] h-[40px] rounded-full absolute bg-[#FAC13C] z-[1] top-[145px] left-[10px]"></div>
          <div className="w-[5px] h-[5px] rounded-full absolute bg-[#579CE2] z-[1] top-[145px] left-[50px]"></div>
          <div className="w-[5px] h-[5px] rounded-full absolute bg-[#579CE2] z-[1] bottom-[-30px] left-[130px]"></div>
        </div>
      </div>
      <div className={styles['section-container']}>
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
