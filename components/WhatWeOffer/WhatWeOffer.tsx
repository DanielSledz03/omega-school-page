import Image from 'next/image';
import { Fragment } from 'react';
import styles from './WhatWeOffer.module.css';
import EyeIcon from '../../public/assets/about/EyeIcon.svg';
import LightIcon from '../../public/assets/about/LightIcon.svg';
import OwlImage from '../../public/assets/about/OwlImage.svg';
import PencilIcon from '../../public/assets/about/PencilIcon.svg';
import PeopleIcon from '../../public/assets/about/PeopleIcon.svg';
import RocketIcon from '../../public/assets/about/RocketIcon.svg';

const WhatWeOffer = () => {
  return (
    <Fragment>
      <div className={styles['owl-container']}>
        <div className={styles['owl-image-container']}>
          <Image src={OwlImage} alt="Grafika Sowa" />
        </div>
        <div className="xl:flex-1">
          <h4 className={styles['owl-header']}>Ponad 30 lat w edukacji</h4>

          <p className={styles['owl-paragraph']}>
            „OMEGA” to placówka z bogatym bagażem doświadczeń. Na jej prestiż
            pracowały kolejne pokolenia uczniów oraz zespoły pedagogiczne.{' '}
            <span className={styles['owl-paragraph-bold']}>
              To Szkoła o wieloletnich tradycjach wynikających z takich wartości
              jak: równość, szacunek, tolerancja, sprawiedliwość i
              odpowiedzialność.
            </span>{' '}
            Stawiamy czoła wyzwaniom globalizacji i dajemy radość z nauki.
            Uczymy empatii, współpracy i działania na rzecz innych. Motorem
            naszych działań naukowych i twórczych jest życzliwa atmosfera.
          </p>
        </div>
      </div>

      <div className={styles['section-rocket-container']}>
        <div className={styles['section-icon-container']}>
          <Image src={RocketIcon} alt="Rakieta" />
        </div>
        <div className={styles['section-text-wrapper']}>
          <h4 className={styles['section-header']}>
            Nowoczesne środki dydaktyczne
          </h4>

          <p className={styles['section-paragraph']}>
            każda klasa wyposażona w dotykowe tablice interaktywne, rzutniki
            oraz komputery. Wykorzystujemy innowacyjne rozwiązania
            multimedialne:
          </p>

          <p className={styles['section-paragraph']}>
            <span className={styles['section-paragraph-bold']}>
              Magiczna Interaktywna Ściana
            </span>{' '}
            łącząca aktywność ruchową z wirtualną rzeczywistością, stanowiąca
            znakomite narzędzie edukacyjne oraz nieocenioną pomoc w zajęciach
            rehabilitacyjnych ukierunkowanych na podwyższenie sprawności
            ruchowej i sensorycznej.
          </p>

          <p className={styles['section-paragraph']}>
            <span className={styles['section-paragraph-bold']}>FunFloor</span> –
            interaktywna podłoga, która jest doskonałym narzędziem wspomagającym
            naukę. ClassVR - niemożliwe staje się rzeczywistością, przenosząc
            uczniów do niewyobrażalnych środowisk, w których mogą doświadczyć
            rzeczy nie z tego świata!
          </p>

          <p className={styles['section-paragraph']}>
            <span className={styles['section-paragraph-bold']}>ClassVR</span> –
            niemożliwe staje się rzeczywistością, przenosząc uczniów do
            niewyobrażalnych środowisk, w których mogą doświadczyć rzeczy nie z
            tego świata!
          </p>
        </div>
      </div>
      <div className="xl:flex xl:flex-wrap xl:justify-between">
        <div className={styles['section-container']}>
          <div className={styles['section-icon-container']}>
            <Image src={LightIcon} alt="Żarówka" />
          </div>
          <div className={styles['section-text-wrapper']}>
            <h4 className={styles['section-header']}>
              Indywidualne podejście do ucznia
            </h4>

            <p className={styles['section-paragraph']}>
              każde dziecko jest niepowtarzalną, wyjątkową osobowością, której
              pomagamy odnaleźć swój potencjał. Dzięki mało licznym klasom
              gwarantujemy właściwą stymulację rozwoju poznawczego, społecznego,
              emocjonalnego i fizycznego.
            </p>
          </div>
        </div>

        <div className={styles['section-container']}>
          <div className={styles['section-icon-container']}>
            <Image src={PencilIcon} alt="Długopis" />
          </div>
          <div className={styles['section-text-wrapper']}>
            <h4 className={styles['section-header']}>
              Z nami Twoje dziecko się nie nudzi
            </h4>

            <p className={styles['section-paragraph']}>
              bogata oferta edukacyjna oparta na interdyscyplinarności oraz
              holistycznym podejściu do problemów i zagadnień poruszanych na
              zajęciach. Oferujemy liczne zajęcia pozalekcyjne, warsztaty
              tematyczne, wycieczki poznawcze, wyjścia do kina, teatru,
              filharmonii.
            </p>
          </div>
        </div>

        <div className={styles['section-container']}>
          <div className={styles['section-icon-container']}>
            <Image src={PeopleIcon} alt="Ludzie" />
          </div>
          <div className={styles['section-text-wrapper']}>
            <h4 className={styles['section-header']}>Opieka specjalistyczna</h4>

            <p className={styles['section-paragraph']}>
              pedagog, psycholog, logopeda, rehabilitant.
            </p>
          </div>
        </div>

        <div className={styles['section-container']}>
          <div className={styles['section-icon-container']}>
            <Image src={EyeIcon} alt="Ikona oka" />
          </div>
          <div className={styles['section-text-wrapper']}>
            <h4 className={styles['section-header']}>Bezpieczeństwo</h4>

            <p className={styles['section-paragraph']}>
              monitoring na terenie szkoły oraz opieka profesjonalnych
              ochroniarzy. 3 świetlice z podziałem na grupy wiekowe czynne od
              7.10 – 17.30
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WhatWeOffer;
