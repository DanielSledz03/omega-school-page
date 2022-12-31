import styles from '../FormComponents.module.css'

interface IProps {
  label: string
  name: string
  placeholder: string
  handleChange: any
  handleBlur: any
  selectedValue?: string
  valueList: string[]
  error?: string
}

export const Select = ({
  error,
  label,
  handleChange,
  selectedValue = '',
  handleBlur,
  name,
  valueList,
  placeholder,
}: IProps) => {
  return (
    <div className={styles['select-container']}>
      <label className={`${error && error.length > 0 && styles['label-error']} ${styles.label}`}>
        {label} {error && '- pole obowiązkowe'}
      </label>
      <select
        className={`${error && error.length > 0 && styles['select-error']} ${styles.select}`}
        value={selectedValue}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
      >
        {/* {selectedValue === placeholder && (
          <option className={styles['select-placeholder']} disabled hidden selected>
            {placeholder}
          </option>
        )} */}
        <option>{placeholder}</option>
        {valueList.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  )
}
