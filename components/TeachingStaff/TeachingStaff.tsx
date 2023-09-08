import { useState } from 'react';
import styles from './TeachingStaff.module.css';
import Button from '../Button/Button';
import HeaderWithBubbles from '../HeaderWithBubbles/HeaderWithBubbles';
const teachers = [
  {
    name: 'Kinga Lubelska',
    position: ['wychowawca grupy 3/4 latków', 'edukacja przedszkolna'],
  },
  {
    name: 'Patrycja Sobczyk',
    position: ['wychowawca grupy 3/4 latków', 'edukacja przedszkolna'],
  },
  {
    name: 'Karolina Kurek',
    position: ['wychowawca grupy 5/6 latków', 'edukacja przedszkolna'],
  },
  {
    name: 'Ewa Klimek',
    position: ['wychowawca klasy 1α', 'edukacja wczesnoszkolna'],
  },
  {
    name: 'Barbara Kozera',
    position: ['wychowawca klasy 1β', 'edukacja wczesnoszkolna'],
  },
  {
    name: 'Joanna Glaesel',
    position: ['wychowawca klasy 2α', 'edukacja wczesnoszkolna'],
  },
  {
    name: 'Ewa Nowrocka',
    position: ['wychowawca klasy 2β', 'edukacja wczesnoszkolna'],
  },
  {
    name: 'Aneta Preiss',
    position: ['wychowawca klasy 3α', 'edukacja wczesnoszkolna'],
  },
  {
    name: 'Anna Jurczak',
    position: ['wychowawca klasy 3β', 'edukacja wczesnoszkolna', 'biblioteka'],
  },
  {
    name: 'Monika Łazarska',
    position: ['wychowawca klasy 4α', 'przyroda', 'biologia'],
  },
  {
    name: 'Aleksandra Duda-Kwaśniewicz',
    position: ['wychowawca klasy 4β', 'język angielski'],
  },
  {
    name: 'Agata Pocenty',
    position: ['wychowawca klasy 5α', 'wychowanie fizyczne', 'WDŻ'],
  },
  {
    name: 'Adriana Baron',
    position: ['wychowawca klasy 5β', 'informatyka', 'etyka'],
  },
  {
    name: 'Paulina Palen',
    position: ['wychowawca klasy 6α', 'język polski', 'biblioteka'],
  },
  {
    name: 'Jakub Kafel',
    position: ['wychowawca klasy 7α', 'chemia', 'matematyka'],
  },
  {
    name: 'Karolina Kostrzewska',
    position: [
      'wychowawca klasy 7β',
      'edukacja dla bezpieczeństwa',
      'wychowanie fizyczne',
    ],
  },
  { name: 'Dawid Makówka', position: ['wychowawca klasy 8α', 'historia'] },
  {
    name: 'Katarzyna Krywult-Krajewska',
    position: ['wychowawca klasy 8β', 'język polski'],
  },
  { name: 'Barbara Labus', position: ['matematyka', 'fizyka'] },
  { name: 'Aleksandra Ryś', position: ['język polski'] },
  { name: 'Grzegorz Jarausz', position: ['język angielski'] },
  { name: 'Monika Kalita-Szromek', position: ['język angielski'] },
  { name: 'Anna Hruby', position: ['język niemiecki'] },
  { name: 'Justyna Hamróz', position: ['język hiszpański'] },
  { name: 'Maryanne Ndlovu', position: ['native speaker'] },
  { name: 'Grzegorz Debris', position: ['matematyka'] },
  { name: 'Natalia Sądel', position: ['matematyka'] },
  { name: 'Grzegorz Sówka', position: ['geografia'] },
  { name: 'Magdalena Mądry-Cieśla', position: ['wiedza o społeczeństwie'] },
  { name: 'Sabina Kabus', position: ['technika'] },
  { name: 'Agnieszka Lisowska-Mrozowska', position: ['plastyka'] },
  { name: 'Alicja Kotyl', position: ['muzyka'] },
  {
    name: 'Katarzyna Borkowska',
    position: ['wychowawca świetlicy', 'muzyka', 'rytmika', 'arteterapia'],
  },
  { name: 'Beata Chren', position: ['edukacja teatralna'] },
  { name: 'Paulina Zdancewicz', position: ['zajęcia teatralne'] },
  { name: 'Jakub Kubieniec', position: ['judo'] },
  { name: 'Anna Racinowska', position: ['religia'] },
  { name: 'Joanna Tomecka', position: ['pedagog szkolny'] },
  { name: 'Agata Ziomek-Dorniak', position: ['psycholog szkolny'] },
  { name: 'Aleksandra Banaś', position: ['logopeda'] },
  { name: 'Joanna Dinges', position: ['doradztwo zawodowe'] },
  { name: 'Wiktoria Merda', position: ['nauczyciel rehabilitant'] },
  { name: 'Barbara Syrek', position: ['pielęgniarka szkolna'] },
];

const TeachingStaff = () => {
  const [teacherCount, setTeacherCount] = useState(15);
  return (
    <div className={styles.container}>
      <HeaderWithBubbles header="Poznaj naszą kadrę" />
      <div className="md:mt-12 xl:mt-[70px]">
        <h5 className={styles.header}>
          Organ Prowadzący Społeczne Towarzystwo Edukacyjne - Zarząd STE
        </h5>
        <div className="xl:flex xl:justify-between">
          <div className={styles['managment-container']}>
            <p className={styles['director-name']}>Jerzy Seremak</p>
            <p className={styles['director-position']}>Prezes</p>
          </div>

          <div className={styles['managment-container']}>
            <p className={styles['director-name']}>Aleksandra Wolska-Balina</p>
            <p className={styles['director-position']}>Wiceprezes</p>
          </div>
          <div className={styles['managment-container']}>
            <p className={styles['director-name']}>Grzegorz Pilarczyk</p>
            <p className={styles['director-position']}>Wiceprezes</p>
          </div>
        </div>
      </div>

      <div className="md:mt-12">
        <h5 className={styles.header}>Dyrekcja</h5>
        <div className="xl:flex xl:justify-between">
          <div className={styles['director-container']}>
            <p className={styles['director-name']}>Anna Wojtala</p>
            <p className={styles['director-position']}>Dyrektor</p>
          </div>

          <div className={styles['director-container']}>
            <p className={styles['director-name']}>Izabela Kulik-Izydorczyk</p>
            <p className={styles['director-position']}>Wicedyrektor</p>
          </div>
        </div>
      </div>

      <div className={styles['techaing-staff-list']}>
        <h5 className={styles.header}>Kadra nauczycielska</h5>
        {teachers.slice(0, teacherCount).map((teacher, index) => (
          <div key={index} className={styles['teacher-box']}>
            <p className={styles['teacher-name']}>{teacher.name}</p>
            <div className="xl:flex xl:items-center">
              <p className={styles['teacher-position']}>
                {teacher.position[0]}
                {teacher.position[1] && (
                  <span className="hidden xl:inline">,</span>
                )}
              </p>
              {teacher.position[1] && (
                <p className={styles['teacher-position']}>
                  {teacher.position[1]}
                </p>
              )}
              {teacher.position[2] && (
                <span className="hidden xl:inline">,</span>
              )}
              {teacher.position[2] && (
                <p className={styles['teacher-position']}>
                  {teacher.position[2]}
                </p>
              )}
              {teacher.position[3] && (
                <span className="hidden xl:inline">,</span>
              )}
              {teacher.position[3] && (
                <p className={styles['teacher-position']}>
                  {teacher.position[3]}
                </p>
              )}
            </div>
          </div>
        ))}
        {teacherCount < teachers.length && (
          <div className="mt-5 xl:flex xl:justify-center xl:mt-[50px]">
            <Button
              onClick={() => setTeacherCount((prev) => prev + 15)}
              buttonColor="bg-[#FAC13C]"
              textColor="text-[white]"
              label="Rozwiń listę nauczycieli"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TeachingStaff;
