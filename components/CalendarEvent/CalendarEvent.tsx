import styles from './CalendarEvent.module.css';

interface IProps {
  date: string;
  label: string;
  fullWidth?: boolean;
}

const CalendarEvent = ({ date, label, fullWidth }: IProps) => {
  return (
    <div
      key={date}
      className={`${fullWidth ? styles['full-width'] : ''} ${
        styles['date-box']
      }`}
    >
      <p className={styles.date}>{date}</p>
      <p className={styles.label}>{label}</p>
    </div>
  );
};

export default CalendarEvent;
