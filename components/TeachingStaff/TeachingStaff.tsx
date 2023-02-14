import Button from '../Button/Button'
import HeaderWithBubbles from '../HeaderWithBubbles/HeaderWithBubbles'
import styles from './TeachingStaff.module.css'

const teachers = [
  { name: 'Anna Kowalska', position: ['j.polski'] },
  { name: 'Anna Kowalska', position: ['j.polski'] },
  { name: 'Anna Kowalska', position: ['Wychowawca klasy 5B', 'j.polski'] },
  { name: 'Anna Kowalska', position: ['j.polski'] },
]

const TeachingStaff = () => {
  return (
    <div className={styles.container}>
      <HeaderWithBubbles header="Poznaj naszą kadrę" />
      <div className="md:mt-12">
        <h5 className={styles.header}>Dyrekcja</h5>
        <div className="xl:flex xl:justify-between">
          <div className={styles['director-container']}>
            <p className={styles['director-name']}>mgr. Anna Kowalska</p>
            <p className={styles['director-position']}>Dyrektor</p>
          </div>

          <div className={styles['director-container']}>
            <p className={styles['director-name']}>mgr. Anna Kowalska</p>
            <p className={styles['director-position']}>Wicedyrektor</p>
          </div>
        </div>
      </div>

      <div className={styles['techaing-staff-list']}>
        <h5 className={styles.header}>Kadra nauczycielska</h5>
        {teachers.map((teacher, index) => (
          <div key={index} className={styles['teacher-box']}>
            <p className={styles['teacher-name']}>{teacher.name}</p>
            <div className="xl:flex xl:items-center">
              <p className={styles['teacher-position']}>
                {teacher.position[0]}
                {teacher.position[1] && <span className="hidden xl:inline">,</span>}
              </p>
              {teacher.position[1] && (
                <p className={styles['teacher-position']}>{teacher.position[1]}</p>
              )}
            </div>
          </div>
        ))}
        <div className="mt-5 xl:flex xl:justify-center xl:mt-8">
          <Button
            onClick={() => null}
            buttonColor="bg-[#FAC13C]"
            textColor="text-[white]"
            label="Rozwiń listę nauczycieli"
          />
        </div>
      </div>
    </div>
  )
}

export default TeachingStaff
