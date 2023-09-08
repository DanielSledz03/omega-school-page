import { ReactNode } from 'react';
import styles from '../FormComponents.module.css';

interface IProps {
  children: ReactNode;
  name: string;
  error?: string;
  value: boolean;
  setFieldValue: any;
}

const Checkbox = ({ error, children, value, name, setFieldValue }: IProps) => {
  return (
    <div className={styles['checkbox-container']}>
      <div
        onClick={() => setFieldValue(name, !value)}
        className={`${error && error?.length > 0 && styles['checkbox-error']} ${
          styles.checkbox
        } `}
      >
        {value && <div className={styles['checkbox-checkmark']}></div>}
      </div>
      <label
        htmlFor={name}
        className={`${
          error && error?.length > 0 ? styles['label-error'] : ''
        } ${styles.label}`}
      >
        <p onClick={() => setFieldValue(name, !value)}>{children}</p>
      </label>
    </div>
  );
};

export default Checkbox;
