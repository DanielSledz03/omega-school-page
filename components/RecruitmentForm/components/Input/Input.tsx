import { HTMLInputTypeAttribute } from 'react';
import styles from '../FormComponents.module.css';

interface IProps {
  label: string;
  name: string;
  placeholder: string;
  handleChange: any;
  handleBlur: any;
  value?: string;
  error?: string;
  type?: HTMLInputTypeAttribute;
}

export const Input = ({
  error,
  label,
  placeholder,
  handleChange,
  value = '',
  handleBlur,
  name,
  type = 'text',
}: IProps) => {
  return (
    <div className={styles['input-container']}>
      <label
        className={`${error && error.length > 0 && styles['label-error']} ${
          styles.label
        }`}
      >
        {label} {error && '- pole obowiązkowe'}
      </label>
      <input
        data-cypress="input"
        type={type}
        name={name}
        className={`${error && error.length > 0 && styles['input-error']} ${
          styles.input
        } `}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
    </div>
  );
};
