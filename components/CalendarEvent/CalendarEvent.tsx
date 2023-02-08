import styles from './CalendarEvent.module.css'

interface IProps {
  date: string
  label: string
}

const CalendarEvent = ({ date, label }: IProps) => {
  return (
    <div key={date} className={styles['date-box']}>
      <p className={styles.date}>{date}</p>
      <p className={styles.label}>{label}</p>
    </div>
  )
}

export default CalendarEvent
