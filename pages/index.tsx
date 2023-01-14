import { Fragment, useRef } from 'react'
import RecruitmentForm from '../components/RecruitmentForm/RecruitmentForm'
import useWindowDimensions from '../hooks/useWindowDimensions'
import { PageHeader } from '../components/PageHeader.tsx/PageHeader'
import styles from '../styles/Home.module.css'

export default function Home() {
  const ref = useRef<HTMLDivElement>(null)
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
        bgUrl="bg-[url(/assets/Bg1.svg)]"
        bgXlUrl="xl:bg-[url(/assets/Bg1-desktop.svg)]"
        title="Zapisz dziecko"
        titleSpan=" do naszej szkoły"
        paragraph="Wypełnij formularz on-line i zapisz swoje dziecko do naszej szkoły, bez wychodzenia z
          domu."
        buttonTitle="Wypełnij formularz"
        onClick={executeScroll}
      />
      <div ref={ref} className={styles['recruitment-form-container']}>
        <RecruitmentForm />
      </div>
    </Fragment>
  )
}
