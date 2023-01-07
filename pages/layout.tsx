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
      </Head>
      {width && width < 1280 && <Navbar />}
      <>{children}</>
      <Footer />
    </>
  )
}
