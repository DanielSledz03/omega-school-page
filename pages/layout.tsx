import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { ReactNode } from 'react'

interface ILayout {
  children: ReactNode
}

export default function Layout({ children }: ILayout) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
