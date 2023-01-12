import Image from 'next/image'
import styles from './Footer.module.css'
import Logo from '../../public/assets/logo.svg'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-header-container']}>
        <h4 className={styles['footer-header-text']}>
          Społeczna Szkoła Podstawowa OMEGA im. Górnośląskich Noblistów w Katowicach
        </h4>
        <div className={styles['footer-logo-container']}>
          <Image src={Logo} alt="logo" className={styles['footer-logo']} />
        </div>
      </div>

      <div className={styles['footer-content-box']}>
        <p className="font-bold">Kontakt</p>

        <div className="mt-5">
          <p>40-862 Katowice</p>
          <p>ul.Gliwicka 276</p>
        </div>

        <div className="mt-5">
          <p>
            tel. <b>32 254 51 24</b>
          </p>
          <p>
            tel. kom. <b>+48 535 890 098</b>
          </p>
          <p>
            mail: <b>sekretariat@omegaszkola.pl</b>
          </p>
        </div>
      </div>

      <div className={styles['footer-content-box']}>
        <p className="font-bold	">Finanse</p>

        <div className="mt-5">
          <p>40-862 Katowice</p>
          <p>ul.Gliwicka 276</p>
        </div>

        <div className="mt-5">
          <p>
            tel. <b>535 316 740</b>
          </p>
          <p>
            mail: <b>finanse@omegaszkola.pl</b>
          </p>
          <p>
            ING Bank Śląski: <b>76 1050 1214 1000 0022 4195 7121</b>
          </p>
        </div>
      </div>

      <div className={styles['footer-content-box']}>
        <p className="font-bold	">Godziny pracy</p>

        <div className="mt-5">
          <b>Kasa</b>
          <p>poniedziałek - piątek: 07:30 – 12:00</p>
        </div>

        <div className="mt-5">
          <b>Sekretariat</b>
          <p>poniedziałek - piątek: 07:30 – 15:30</p>
        </div>
      </div>

      <div className={styles['footer-content-box']}>
        <p className="font-bold	">Świetlica</p>

        <div className="mt-5">
          <b>Godziny pracy</b>
          <p>poniedziałek - piątek: 07:15 – 17:30</p>
        </div>

        <div className="mt-5">
          <b>Kontakt</b>

          <p>
            klasy 1 tel. <b>+48 570 907 110</b>
          </p>
          <p>
            klasy 2-3 tel. <b>+48 533 890 098</b>
          </p>
          <p>
            klasy 4-8 tel. <b>+48 730 926 556</b>
          </p>
        </div>
      </div>

      <div className={styles['footer-school-name']}>
        <p>© 2022</p>
        <p>Społeczna Szkoła Podstawowa OMEGA</p>
      </div>

      <div className={styles['footer-authors-box']}>
        <p>
          Projekt graficzny: <b>DrawnInStars</b>
        </p>
        <p>
          Developed by: <b>Daniel Śledź</b>
        </p>
      </div>
    </footer>
  )
}

export default Footer
