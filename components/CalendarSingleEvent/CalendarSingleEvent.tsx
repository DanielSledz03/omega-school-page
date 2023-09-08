import styles from './CalendarSingleEvent.module.css';

interface IProps {
  header: string;
  dates: string[];
  single?: boolean;
}

const CalendarSingleEvent = ({ header, dates, single = false }: IProps) => {
  return (
    <div className={`${styles.container} ${single ? styles.single : ''}`}>
      <h3 className={styles.header}>{header}</h3>
      {dates.map((date) => (
        <div key={date} className={styles['date-box']}>
          <p className={styles.date}>{date}</p>
        </div>
      ))}
    </div>
  );
};

export default CalendarSingleEvent;
