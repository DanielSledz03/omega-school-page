import styles from './Navbar.module.css'
import Logo from '../../public/assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import YoutubeIcon from '../../public/assets/YoutubeIcon.svg'
import FacebookIcon from '../../public/assets/FacebookIcon.svg'
import { useRouter } from 'next/router'
import Hamburger from '../Hamburger/Hamburger'
import { useState } from 'react'
import { MobileNav } from '../MobileNav/MobileNav'

const ALink = ({
  title,
  isBuilding,
  href,
}: {
  title: string
  isBuilding?: boolean
  href: string
}) => {
  const router = useRouter()
  return (
    <Link
      className={`${router.pathname === href ? styles['nav-a-selected'] : ''} ${styles['nav-a']}`}
      href={href}
    >
      {title}
      {isBuilding && (
        <div className={styles['nav-under-contruction-box']}>
          <div className={styles['nav-under-contruction-arrow']} />
          <div className={styles['nav-under-contruction-text-container']}>
            <p>Podstrona w budowie!</p>
            <p>Zapraszamy wkrótce.</p>
          </div>
        </div>
      )}
    </Link>
  )
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleHamburger = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles['logo-container']}>
        <Image className={styles.logo} src={Logo} alt="Logo" />
      </div>

      <Hamburger toggleHamburger={toggleHamburger} isOpen={isMenuOpen} />

      <MobileNav isMenuOpen={isMenuOpen} />
      <div className="flex w-screen hidden xl:flex ">
        <div className="flex justify-around w-8/12 xl:w-1/2 xl:ml-[50px] 3xl:w-1/2 ">
          <ALink title="O&nbsp;naszej&nbsp;szkole" href="/o-nas" isBuilding />
          <ALink title="Aktualności" isBuilding href="/aktualnosci" />
          <ALink title="Oferta" isBuilding href="/oferta" />
          <ALink title="Rekrutacja" isBuilding href="/rekrutacja" />
          {/* <ALink title="Galeria" isBuilding href="/galeria" /> */}
        </div>
        <div className="flex justify-center items-center xl:w-1/3 3xl:w-1/3 3xl:ml-10">
          <Link className={`${styles['nav-contact']}`} href="">
            Kontakt
            <div className={styles['nav-under-contruction-box']}>
              <div className={styles['nav-under-contruction-arrow']} />
              <div className={styles['nav-under-contruction-text-container']}>
                <p>Podstrona w budowie!</p>
                <p>Zapraszamy wkrótce.</p>
              </div>
            </div>
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/channel/UCQn_lSAlyQnH3CpkMIiLy-g"
            className="mr-4"
          >
            <Image src={YoutubeIcon} alt="s" />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/zespolszkolomega"
          >
            <Image src={FacebookIcon} alt="2s" />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
