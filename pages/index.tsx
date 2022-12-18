import Image from 'next/image'
import { Fragment, useRef } from 'react'
import Navbar from '../components/Navbar/Navbar'
import RecruitmentForm from '../components/RecruitmentForm/RecruitmentForm'
import styles from '../styles/Home.module.css'
import EllipsesLeft from '../public/assets/EllipsesLeft.svg'
import EllipsesRight from '../public/assets/EllipsesRight.svg'
import Footer from '../components/Footer/Footer'

export default function Home() {
  const ref = useRef<HTMLDivElement>(null)
  const executeScroll = () => {
    if (ref?.current?.offsetTop)
      window.scroll({ top: ref?.current?.offsetTop - 60, left: 0, behavior: 'smooth' })
  }

  return (
    <Fragment>
      <Navbar />
      <main className={styles.main}>
        <div className={styles['texts-container']}>
          <div>
            <h1 className={styles['header1']}>Zapisz dziecko</h1>
            <span className={styles['header1-span']}> do naszej szkoły</span>
          </div>
          <p className={styles['paragraph']}>
            Wypełnij formularz on-line i zapisz swoje dziecko do naszej szkoły bez wychodzenia z
            domu.
          </p>
          <button onClick={executeScroll} className={styles['button']}>
            Wypełnij formularz
          </button>
        </div>
      </main>

      <div ref={ref} className="w-full flex flex-col py-10 px-5">
        <div className="w-full flex justify-center relative">
          <div className="absolute top-[10px] left-[10px]">
            <Image src={EllipsesLeft} alt="EllipsesLeft" />
          </div>

          <div className="absolute top-[10px] right-[10px]">
            <Image src={EllipsesRight} alt="EllipsesRight" />
          </div>

          <h2 className="text-[#579CE2] font-bold text-3xl w-[150px] text-center	">
            Rekrutacja on-line
          </h2>
        </div>
        <RecruitmentForm />
      </div>
      <Footer />
    </Fragment>
  )
}
