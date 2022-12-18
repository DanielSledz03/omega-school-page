import Image from 'next/image'
import styles from './Footer.module.css'
import Logo from '../../public/assets/logo.svg'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="flex h-[100px] border-b-[1px] border-b-[#455677]">
        <h4 className="block flex-1 mr-4">
          Społeczna Szkoła Podstawowa OMEGA im. Górnośląskich Noblistów w Katowicach
        </h4>
        <div className="w-3/12 h-fullflex items-start justify-center	">
          <Image src={Logo} alt="logo" style={{ objectFit: 'contain', width: '100%' }} />
        </div>
      </div>

      <div className="flex flex-col my-12 ">
        <p className="font-bold	">Kontakt</p>

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

      <div className="flex flex-col my-12 ">
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

      <div className="flex flex-col my-12 ">
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

      <div className="flex flex-col my-12 ">
        <p className="font-bold	">Świetlica</p>

        <div className="mt-5">
          <b>Godziny pracy</b>
          <p>poniedziałek - piątek: 07:30 – 17:30</p>
        </div>

        <div className="mt-5">
          <b>Kontakt</b>
          <p>
            klasy 0 i 2 tel. <b>+48 570 907 110</b>
          </p>
          <p>
            klasy 1 tel. <b>+48 730 926 556</b>
          </p>
          <p>
            klasy 3 tel. <b>+48 533 890 098</b>
          </p>
          <p>
            klasy 4-8 tel. <b>+48 889 345 265</b>
          </p>
        </div>
      </div>

      <div className="border-y-[1px] border-y-[#455677] flex flex-col justify-center items-center py-6">
        <p>© 2022</p>
        Społeczna Szkoła Podstawowa OMEGA
      </div>

      <div className="flex flex-col justify-center items-center pt-6">
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
