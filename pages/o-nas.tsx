import { Fragment, useRef } from 'react'
import { PageHeader } from '../components/PageHeader.tsx/PageHeader'
import BgDesktop from '../public/assets/headers/bgAboutDesktop.jpg'
import BgMobile from '../public/assets/headers/bgAboutMobile.jpg'
import useWindowDimensions from '../hooks/useWindowDimensions'
import LogoAndStatut from '../components/LogoAndStatut/LogoAndStatut'
import WhatWeOffer from '../components/WhatWeOffer/WhatWeOffer'
import TeachingStaff from '../components/TeachingStaff/TeachingStaff'
import styles from '../styles/About.module.css'
import Image from 'next/image'
import PatternImg from '../public/assets/about/Pattern.svg'
import AboutUs_SocialMedia from '../components/AboutUs-SocialMedia/AboutUs-SocialMedia'
const ONas = () => {
  const ref = useRef<any>(null)
  const { width } = useWindowDimensions()
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
        bgUrl={BgMobile}
        bgXlUrl={BgDesktop}
        title="Zapraszamy"
        titleSpanColor="white"
        titleSpan="do naszego świata!"
        paragraph="„OMEGA” to placówka z bogatym bagażem doświadczeń.
        Na jej prestiż pracowały kolejne pokolenia uczniów
        oraz zespoły pedagogiczne."
        buttonTitle="Poznaj nas bliżej :)"
        onClick={executeScroll}
      />
      <main
        ref={ref}
        className="px-5 pb-8 md:px-8 md:pb-12 md:mt-8 xl:px-[110px] 2xl:px-[180px] overflow-hidden"
      >
        <LogoAndStatut />
        <WhatWeOffer />
        <div className="w-screen relative min-h-[250px] -mx-5 md:-mx-8 md:mb-5 xl:mt-8 xl:mb-12 xl:mx-[-110px] 2xl:mx-[-180px]  ">
          <div className="absolute top-0 w-full h-full z-10 flex justify-center items-center">
            <p className="px-3 text-[25px] text-[#579CE2] font-bold text-center xl:text-[65px]">
              Zapraszamy do naszego świata
            </p>
          </div>

          <div className="absolute top-0 z-6 w-full h-full">
            <Image src={PatternImg} alt="tło" className={styles['pattern-image']} />
          </div>
        </div>
        <AboutUs_SocialMedia />
        <TeachingStaff />
      </main>
    </Fragment>
  )
}

export default ONas
