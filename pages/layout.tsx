import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { ReactNode } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions'

interface ILayout {
  children: ReactNode
}

export default function Layout({ children }: ILayout) {
  const { width } = useWindowDimensions()
  return (
    <div className="max-w-[1920px] mx-auto">
      {width && width < 1280 && <Navbar />}
      <main>{children}</main>
      <Footer />
    </div>
  )
}
