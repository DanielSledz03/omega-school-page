import styles from '../FormComponents.module.css'

interface IProps {
  label: string
  name: string
  setFieldValue: any
  error?: string
}

const RadioButtons = ({ error, label, setFieldValue, name }: IProps) => {
  return (
    <div className="xl:w-1/2">
      <label className={`${error && error.length > 0 && styles['label-error']} ${styles.label}`}>
        {label}
      </label>
      <div className={styles['radio-container']}>
        <div className={styles['radio-button']}>
          <input
            type="radio"
            className={styles.radio}
            name={name}
            id={`${name}1`}
            onChange={() => setFieldValue(name, true)}
          />
          <label htmlFor={`${name}1`}>Tak</label>
        </div>

        <div className={styles['radio-button']}>
          <input
            type="radio"
            className={styles.radio}
            name={name}
            id={`${name}2`}
            onChange={() => setFieldValue(name, false)}
            defaultChecked
          />
          <label htmlFor={`${name}2`}>Nie</label>
        </div>
      </div>
    </div>
  )
}

export default RadioButtons
