import { Fragment } from 'react';
import CalendarMultiEvents from '../components/CalendarMultiEvents/CalendarMultiEvents';
import CalendarSingleEvent from '../components/CalendarSingleEvent/CalendarSingleEvent';
import HeaderWithBubbles from '../components/HeaderWithBubbles/HeaderWithBubbles';
import { PageHeader } from '../components/PageHeader.tsx/PageHeader';
import BgDesktop from '../public/assets/headers/bgCalendarDesktop.jpg';
import BgMobile from '../public/assets/headers/bgCalendarMobilee.jpg';
const Kalendarz = () => {
  return (
    <Fragment>
      <PageHeader
        bgUrl={BgMobile}
        bgXlUrl={BgDesktop}
        title="Kalendarz"
        titleSpan="roku szkolnego"
        paragraph="Jeżeli zastanawiasz się, kiedy wypada istotne
        dla życia szkoły święto, wystarczy, że sprawdzisz 
        datę w naszym kalendarzu."
        buttonTitle="Sprawdź kalendarz"
        onClick={() => null}
      />
      <HeaderWithBubbles header="Kalendarz roku szkolnego 2022 - 2023" />
      <div className="xl:flex xl:flex-wrap xl:justify-between max-w-[1300px] xl:mx-auto">
        <div className="xl:w-full">
          <CalendarSingleEvent
            single
            header="Dzień otwarty"
            dates={['4 marca 2023']}
          />
        </div>

        <CalendarSingleEvent
          header="Zebrania i konsultacje z rodzicami"
          dates={[
            '7 września 2022',
            '28 września 2022',
            '19 października 2022',
            '16 listopada 2022',
            '14 grudnia 2022',
            '11 stycznia 2023',
            '15 marca 2023',
            '19 kwietnia 2023',
            '17 maja 2023',
          ]}
        />

        <CalendarSingleEvent
          header="Dni wolne od zajęć"
          dates={[
            '31 październik 2022',
            '1 listopada 2022',
            '11 listopada 2022',
            '25, 26 grudnia 2022',
            '1 stycznia 2023',
            '6 stycznia 2023',
            '9, 10 kwietnia 2023',
            '1, 2, 3 maja 2023',
            '26 maja 2023',
            '8, 9 czerwca 2023',
          ]}
        />
      </div>
      <div className="pb-[50px] max-w-[1300px] mx-auto xl:pb-[100px]">
        <CalendarMultiEvents
          header="Inne ważne daty"
          dates={[
            { label: 'Rozpoczęcie roku szkolnego', date: '1 września 2022' },
            { label: 'Dzień edukacji narodowej', date: '14 października 2022' },
            { label: 'Klasowe spotkanie świąteczne', date: '23 grudnia 2022' },
            {
              label: 'Zimowa przerwa świąteczna',
              date: '23 grudnia 2022 - 31 grudnia 2022',
            },
            { label: 'Zakończenie I semestru', date: '27 stycznia 2023' },
            { label: 'Rozpoczęcie II semestru', date: '30 stycznia 2023' },
            { label: 'Ferie zimowe', date: '16 stycznia - 29 stycznia 2023' },
            { label: 'Egzamin ósmoklasisty', date: '23, 24, 25 maja 2023' },
            {
              label: 'Zakończenie zajęć dydaktyczno-wychowawczych',
              date: '23 czerwca 2023',
            },
            {
              label: 'Ferie letnie',
              date: '24 czerwca - 31 sierpnia 2023',
            },
          ]}
        />
      </div>
    </Fragment>
  );
};

export default Kalendarz;
