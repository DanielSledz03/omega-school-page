import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './MobileNav.module.css';
import BackButtonIcon from '../../public/assets/BackButtonIcon.svg';
import FacebookIcon from '../../public/assets/FacebookIcon.svg';
import YoutubeIcon from '../../public/assets/YoutubeIcon.svg';

export const MobileNav = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const [isHomeListVisible, setIsHomeListVisible] = useState(false);

  return (
    <div
      className={`${!isMenuOpen ? styles['mobile-nav-visible'] : ''} ${
        styles['mobile-nav']
      }`}
    >
      <div
        className={`${
          isHomeListVisible ? 'left-0' : 'left-full'
        } w-full h-full top-0 absolute bg-[#071E4A] duration-300 flex flex-col items-center justify-around pb-12 `}
      >
        <h3 className={`mt-8 ${styles['mobile-nav-header']}`}>
          <div
            onClick={() => setIsHomeListVisible(false)}
            className="h-full flex items-center justify-around absolute left-8 "
          >
            <Image src={BackButtonIcon} alt="BackButtonIcon" />
          </div>
          Nasza szkoła
        </h3>
        <ul className={styles.list}>
          <li className={styles['list-item']}>
            <Link className={styles['list-item-anchor']} href="/o-nas">
              O nas
            </Link>
          </li>
          <li className={styles['list-item']}>
            <Link className={styles['list-item-anchor']} href="/galeria">
              Galeria
            </Link>
          </li>
          <li className={styles['list-item']}>
            <Link className={styles['list-item-anchor']} href="/kalendarz">
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

      <div
        className={` w-full h-full bg-[#071E4A] flex flex-col items-center justify-around  `}
      >
        <h3 className={styles['mobile-nav-header']}>Menu</h3>
        <ul className={styles.list}>
          <li className={styles['list-item']}>
            <Link className={styles['list-item-anchor']} href="/">
              Strona Główna
            </Link>
          </li>
          <li className={styles['list-item']}>
            <Link className={styles['list-item-anchor']} href="/aktualnosci">
              Aktualności
            </Link>
          </li>
          <li className={styles['list-item']}>
            <Link
              className={styles['list-item-anchor']}
              href=""
              onClick={() => setIsHomeListVisible(true)}
            >
              Nasza szkoła
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
          <Link className={styles['contact-button']} href="/kontakt">
            Kontakt
          </Link>

          <div className={styles['social-media-container']}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UCQn_lSAlyQnH3CpkMIiLy-g"
            >
              <Image
                src={YoutubeIcon}
                alt="Youtube Icon"
                className="mx-2 md:mx-5 md:w-[50px]"
              />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/zespolszkolomega"
            >
              <Image
                src={FacebookIcon}
                alt="Facebook Icon"
                className="mx-2 md:mx-5 md:w-[50px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
