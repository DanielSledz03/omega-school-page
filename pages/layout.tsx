import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { ReactNode } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions'
import Head from 'next/head'

interface ILayout {
  children: ReactNode
}

export default function Layout({ children }: ILayout) {
  const { width } = useWindowDimensions()
  return (
    <>
      <Head>
        <title>Społeczna Szkoła Podstawowa OMEGA im. Górnośląskich Noblistów w Katowicach</title>
        <meta
          name="description"
          content="Społeczna Szkoła Podstawowa OMEGA im. Górnośląskich Noblistów w Katowicach"
          key="desc"
        />
        <meta property="og:title" content={'Społeczna Szkoła Podstawowa OMEGA'} key={'og-title'} />
        <meta
          property="og:description"
          content="Zapraszamy na naszą stronę internetową!"
          key={'og:desc'}
        />
        <meta property="og:image" content="/assets/logo.svg" />
      </Head>
      {width && width < 1280 && <Navbar />}
      <>{children}</>
      <Footer />
    </>
  )
}
