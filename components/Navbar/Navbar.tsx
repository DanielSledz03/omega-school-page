import styles from './Navbar.module.css'
import Logo from '../../public/assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import YoutubeIcon from '../../public/assets/YoutubeIcon.svg'
import FacebookIcon from '../../public/assets/FacebookIcon.svg'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles['logo-container']}>
        <Image className={styles.logo} src={Logo} alt="Logo" />
      </div>

      <div className="flex flex-1 hidden xl:flex ">
        <div className="flex justify-around w-8/12">
          <Link className={styles['nav-a']} href="">
            O naszej szkole
          </Link>
          <Link className={styles['nav-a']} href="">
            Rekrutacja
          </Link>
          <Link className={styles['nav-a']} href="">
            Galeria
          </Link>
          <Link className={`${styles['nav-contact']}`} href="">
            Kontakt
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
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
