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
        {/* <div className="xl:w-full">
          <CalendarSingleEvent
            single
            header="Dzień otwarty"
            dates={['4 marca 2023']}
          />
        </div> */}

        <CalendarSingleEvent
          header="Zebrania i konsultacje z rodzicami"
          dates={[
            '6 września 2023',
            '27 września 2023 (dla klas 8)',
            '25 października 2023',
            '22 listopada 2023',
            '20 grudnia 2023',
            '24 stycznia 2024',
            '6 marca 2024 (dla klas 8)',
            '20 marca 2024',
            '10 kwietnia 2024',
            '24 kwietnia 2024',
            '5 czerwca 2024',
          ]}
        />

        <CalendarSingleEvent
          header="Dni wolne od zajęć"
          dates={[
            '1, 2, 3 listopada 2023',
            '11 listopada 2023',
            '25, 26 grudnia 2023',
            '1 stycznia 2024',
            '6 stycznia 2024',
            '1, 2 kwietnia 2024',
            '1, 2, 3 maja 2024',
            '14, 15, 16, 17 maja 2024',
            '30, 31 maja 2024',
          ]}
        />
      </div>
      <div className="pb-[50px] max-w-[1300px] mx-auto xl:pb-[100px]">
        <CalendarMultiEvents
          header="Inne ważne daty"
          dates={[
            { label: 'Rozpoczęcie roku szkolnego', date: '4 września 2023' },
            { label: 'Dzień edukacji narodowej', date: '14 października 2023' },
            {
              label: 'Zimowa przerwa świąteczna',
              date: '23 grudnia 2023 - 31 grudnia 2023',
            },
            { label: 'Zakończenie I semestru', date: '26 stycznia 2024' },
            { label: 'Rozpoczęcie II semestru', date: '29 stycznia 2024' },
            { label: 'Ferie zimowe', date: '29 stycznia - 11 lutego 2024' },
            {
              label: 'Wiosenna przerwa świąteczna',
              date: '28 marca - 2 kwietnia 2024',
            },

            { label: 'Egzamin ósmoklasisty', date: '14, 15, 16 maja 2024' },
            { label: 'Wystawienie ocen rocznych', date: 'do 12 czerwca 2024' },

            {
              label: 'Zakończenie zajęć dydaktyczno-wychowawczych',
              date: '21 czerwca 2024',
            },
            {
              label: 'Ferie letnie',
              date: '22 czerwca - 31 sierpnia 2024',
            },
          ]}
        />
      </div>
    </Fragment>
  );
};

export default Kalendarz;
