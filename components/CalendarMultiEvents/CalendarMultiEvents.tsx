import styles from './CalendarMultiEvents.module.css';
import CalendarEvent from '../CalendarEvent/CalendarEvent';

interface IProps {
  header: string;
  dates: { date: string; label: string }[];
}

const CalendarMultiEvents = ({ header, dates }: IProps) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>{header}</h3>
      {dates.map((date, index) => (
        <CalendarEvent key={index} label={date.label} date={date.date} />
      ))}
    </div>
  );
};

export default CalendarMultiEvents;
