import { useState, Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import YoutubeIcon from '../../public/assets/YoutubeIcon.svg'
import FacebookIcon from '../../public/assets/FacebookIcon.svg'
import styles from './MobileNav.module.css'
import BackButtonIcon from '../../public/assets/BackButtonIcon.svg'

export const MobileNav = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const [isHomeListVisible, setIsHomeListVisible] = useState(false)
  return (
    <div className={`${!isMenuOpen ? styles['mobile-nav-visible'] : ''} ${styles['mobile-nav']}`}>
      <div
        className={`${
          isHomeListVisible ? 'left-0' : 'left-full'
        } w-full h-full absolute bg-[#071E4A] duration-300 flex flex-col items-center justify-around  `}
      >
        <h3 className={styles['mobile-nav-header']}>
          <div
            onClick={() => setIsHomeListVisible(false)}
            className="h-full flex items-center justify-center mr-12 "
          >
            <Image src={BackButtonIcon} alt="BackButtonIcon" />
          </div>
          Nasza szkoła
        </h3>
        <ul className={styles.list}>
          <li className={styles['list-item']}>
            <Link
              className={styles['list-item-anchor']}
              href=""
              onClick={() => setIsHomeListVisible(true)}
            >
              O nas
            </Link>
          </li>
          <li className={styles['list-item']}>
            <Link className={styles['list-item-anchor']} href="">
              Galeria
            </Link>
          </li>
          <li className={styles['list-item']}>
            <Link className={styles['list-item-anchor']} href="">
              Kalendarz
            </Link>
          </li>
        </ul>
        <div>
          <Link className={styles['contact-button']} href="">
            Kontakt
          </Link>

          <div className={styles['social-media-container']}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UCQn_lSAlyQnH3CpkMIiLy-g"
            >
              <Image src={YoutubeIcon} alt="Youtube Icon" className="mx-2" />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/zespolszkolomega"
            >
              <Image src={FacebookIcon} alt="Facebook Icon" className="mx-2" />
            </Link>
          </div>
        </div>
      </div>

      <div className={` w-full h-full bg-[#071E4A] flex flex-col items-center justify-around  `}>
        <h3 className={styles['mobile-nav-header']}>Menu</h3>
        <ul className={styles.list}>
          {/* <li className={styles['list-item']}>
            <Link
              className={styles['list-item-anchor']}
              href=""
              onClick={() => setIsHomeListVisible(true)}
            >
              O naszej szkole
            </Link>
          </li> */}
          <li className={styles['list-item']}>
            <Link className={styles['list-item-anchor']} href="">
              Aktualności
            </Link>
          </li>
          <li className={styles['list-item']}>
            <Link className={styles['list-item-anchor']} href="/oferta">
              Oferta
            </Link>
          </li>
          <li className={styles['list-item']}>
            <Link className={styles['list-item-anchor']} href="/rekrutacja">
              Rekrutacja
            </Link>
          </li>
        </ul>
        <div>
          <Link className={styles['contact-button']} href="">
            Kontakt
          </Link>

          <div className={styles['social-media-container']}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UCQn_lSAlyQnH3CpkMIiLy-g"
            >
              <Image src={YoutubeIcon} alt="Youtube Icon" className="mx-2" />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/zespolszkolomega"
            >
              <Image src={FacebookIcon} alt="Facebook Icon" className="mx-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
