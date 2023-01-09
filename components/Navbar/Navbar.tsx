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
        <div className="flex justify-around w-8/12 xl:w-2/3 xl:ml-[50px] 2xl:w-1/2 2xl:px-3">
          <Link className={styles['nav-a']} href="">
            O naszej szkole
            <div className={styles['nav-under-contruction-box']}>
              <div className={styles['nav-under-contruction-arrow']} />
              <div className={styles['nav-under-contruction-text-container']}>
                <p>Podstrona w budowie!</p>
                <p>Zapraszamy wkrótce.</p>
              </div>
            </div>
          </Link>
          <Link className={`${styles['nav-a-selected']} ${styles['nav-a']}`} href="">
            Rekrutacja
            <div
              className={`opacity-0 relative bottom-0 p-4 bg-white text-[13px] text-[#071E4A] rounded-[15px] mt-5 duration-300;`}
            >
              <div
                className={`absolute z-[-1] bg-[white] w-[20px] h-[20px] top-[-10px] rotate-45`}
              />
            </div>
          </Link>
          <Link className={styles['nav-a']} href="">
            Galeria
            <div className={styles['nav-under-contruction-box']}>
              <div className={styles['nav-under-contruction-arrow']} />
              <div className={styles['nav-under-contruction-text-container']}>
                <p>Podstrona w budowie!</p>
                <p>Zapraszamy wkrótce.</p>
              </div>
            </div>
          </Link>
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
        </div>
        <div className="flex justify-center xl:w-1/2  2xl:w-1/3 2xl:pl-[160px]">
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
