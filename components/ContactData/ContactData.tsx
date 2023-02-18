import { Fragment } from 'react'
import styles from './ContactData.module.css'

const ContactData = () => {
  return (
    <div className="w-full xl:w-[40%] xl:pr-12">
      <div className={styles['section-container']}>
        <h5 className={styles['section-header']}>Kontakt</h5>
        <div className={styles['section-inner-box']}>
          <p className="font-bold">40-862 Katowice</p>
          <p className="font-bold">ul.Gliwicka 276</p>
        </div>
        <div className={styles['section-inner-box']}>
          <p>
            tel. <span className="font-bold">32 254 51 24</span>
          </p>
          <p>
            tel. kom. <span className="font-bold">+48 535 890 098</span>
          </p>
          <p>
            mail: <span className="font-bold">sekretariat@omegaszkola.pl</span>
          </p>
        </div>
        <div className={styles['section-inner-box']}>
          <p>
            klasy 1 tel. <span className="font-bold">+48 570 907 110</span>
          </p>
          <p>
            klasy 2-3 tel. <span className="font-bold">+48 533 890 098</span>
          </p>
          <p>
            klasy 4-8 tel. <span className="font-bold">+48 730 926 556</span>
          </p>
        </div>
      </div>

      <div className={styles['section-container']}>
        <h5 className={styles['section-header']}>Godziny pracy</h5>
        <div className={styles['section-inner-box']}>
          <p className="font-bold">Kasa</p>
          <p>
            poniedziałek - piątek: <span className="font-bold">08:00 – 12:00</span>
          </p>
        </div>
        <div className={styles['section-inner-box']}>
          <p className="font-bold">Sekretariat</p>
          <p>
            poniedziałek - piątek: <span className="font-bold">07:30 – 15:30</span>
          </p>
        </div>
      </div>

      <div className={`${styles['day-room-section-container']} ${styles['section-container']}`}>
        <h5 className={styles['section-header']}>Świetlica</h5>
        <div className={styles['section-inner-box']}>
          <p className="font-bold">Godziny pracy</p>
          <p>
            poniedziałek - piątek: <span className="font-bold">07:30 – 17:30</span>
          </p>
        </div>
      </div>

      <div className={`${styles['last-section-container']} ${styles['section-container']} `}>
        <h5 className={styles['section-header']}>Finanse</h5>
        <div className={styles['section-inner-box']}>
          <p className="font-bold">40-862 Katowice</p>
          <p className="font-bold">ul.Gliwicka 276</p>
        </div>
        <div className={styles['section-inner-box']}>
          <p>
            tel. <span className="font-bold">535 316 740</span>
          </p>
          <p>
            mail: <span className="font-bold">finanse@omegaszkola.pl</span>
          </p>
          <p>
            ING Bank Śląski: <br />
            <span className="font-bold">76 1050 1214 1000 0022 4195 7121</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactData
