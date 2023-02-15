import styles from './Navbar.module.css'
import Logo from '../../public/assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import YoutubeIcon from '../../public/assets/YoutubeIcon.svg'
import FacebookIcon from '../../public/assets/FacebookIcon.svg'
import { useRouter } from 'next/router'
import Hamburger from '../Hamburger/Hamburger'
import { Fragment, useState } from 'react'
import { MobileNav } from '../MobileNav/MobileNav'
import useWindowDimensions from '../../hooks/useWindowDimensions'

const Navbar = ({ className }: { className?: any }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const { width } = useWindowDimensions()

  const toggleHamburger = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <nav className={`${className} ${styles.navbar}`}>
      <div onClick={() => router.push('/')} className="w-[70px] xl:w-[100px] hover:cursor-pointer">
        <Image src={Logo} alt="STE" />
      </div>
      {width < 1280 && (
        <Fragment>
          <Hamburger toggleHamburger={toggleHamburger} isOpen={isMenuOpen} />
          <MobileNav isMenuOpen={isMenuOpen} />
        </Fragment>
      )}
      <div className="hidden xl:flex flex-1 pl-[30px]">
        <div className={styles['navbar-a-wrapper']}>
          <Link
            href="/aktualnosci"
            className={`${router.route === '/aktualnosci' ? styles['navbar-selected'] : ''} ${
              router.route === '/o-nas' || router.route === '/kontakt'
                ? styles['navbar-a-about-page']
                : ''
            } ${styles['navbar-a']}`}
          >
            Aktualności
          </Link>
          <div
            className={`${
              router.route === '/kalendarz' || router.route === '/galeria'
                ? styles['navbar-our-school-selected']
                : ''
            } ${router.route === '/o-nas' ? styles['navbar-our-school-selected-black'] : ''} ${
              styles['navbar-our-school']
            }`}
          >
            Nasza szkoła
            <div className={styles['navbar-our-school-modal']}>
              <Link href="/o-nas">O nas</Link>
              <Link href="/kalendarz">Kalendarz</Link>
              <Link href="/galeria">Galeria</Link>
            </div>
          </div>
          <Link
            href="/oferta"
            className={`${router.route === '/oferta' ? styles['navbar-selected'] : ''} ${
              router.route === '/o-nas' || router.route === '/kontakt'
                ? styles['navbar-a-about-page']
                : ''
            } ${styles['navbar-a']}`}
          >
            Oferta
          </Link>
          <Link
            href="/rekrutacja"
            className={`${router.route === '/rekrutacja' ? styles['navbar-selected'] : ''} ${
              router.route === '/o-nas' || router.route === '/kontakt'
                ? styles['navbar-a-about-page']
                : ''
            } ${styles['navbar-a']}`}
          >
            Rekrutacja
          </Link>
        </div>

        <div className="w-[45%] flex justify-end items-center">
          <Link
            href="/kontakt"
            className={`${router.route === '/kontakt' ? styles['navbar-contact-selected'] : ''} ${
              styles['navbar-contact']
            }`}
          >
            Kontakt
          </Link>

          <div className="flex">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UCQn_lSAlyQnH3CpkMIiLy-g"
            >
              <div className="mx-2">
                <Image src={YoutubeIcon} alt="Yt" />
              </div>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/zespolszkolomega"
            >
              <div className="mx-2">
                <Image src={FacebookIcon} alt="Fb" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
