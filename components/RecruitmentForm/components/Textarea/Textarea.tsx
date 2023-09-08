import styles from '../FormComponents.module.css';

interface IProps {
  label: string;
  name: string;
  placeholder: string;
  handleChange: any;
  handleBlur: any;
  value?: string;
  error?: string;
}

export const Textarea = ({
  error,
  label,
  placeholder,
  handleChange,
  value = '',
  handleBlur,
  name,
}: IProps) => {
  return (
    <div className="xl:w-full">
      <label
        className={`${error && error.length > 0 && styles['label-error']} ${
          styles.label
        }`}
      >
        {label}
      </label>
      <textarea
        name={name}
        className={`${error && error.length > 0 && styles['textarea-error']} ${
          styles.textarea
        } `}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
    </div>
  );
};
