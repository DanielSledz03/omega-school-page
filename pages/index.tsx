import { Fragment, useRef } from 'react'
import RecruitmentForm from '../components/RecruitmentForm/RecruitmentForm'
import Button from '../components/Button/Button'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar/Navbar'

export default function Home() {
  const ref = useRef<HTMLDivElement>(null)
  const executeScroll = () => {
    if (ref?.current?.offsetTop)
      window.scroll({ top: ref?.current?.offsetTop - 60, left: 0, behavior: 'smooth' })
  }

  return (
    <Fragment>
      <div className={styles.container}>
        <Navbar />
        <div className={styles['texts-container']}>
          <div>
            <h1 className={styles['header1']}>Zapisz dziecko</h1>
            <span className={styles['header1-span']}> do naszej szkoły</span>
          </div>
          <p className={styles['paragraph']}>
            Wypełnij formularz on-line i zapisz swoje dziecko do naszej szkoły bez wychodzenia z
            domu.
          </p>
          <Button label="Wypełnij formularz" onClick={executeScroll} className={styles['button']} />
        </div>
      </div>

      <div ref={ref} className={styles['recruitment-form-container']}>
        <RecruitmentForm />
      </div>
    </Fragment>
  )
}
