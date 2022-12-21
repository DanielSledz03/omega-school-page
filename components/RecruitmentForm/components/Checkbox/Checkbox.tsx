import { ReactNode } from 'react'
import styles from '../FormComponents.module.css'

interface IProps {
  children: ReactNode
  name: string
  handleChange: any
  error?: string
}

const Checkbox = ({ error, children, handleChange, name }: IProps) => {
  return (
    <div className={styles['checkbox-container']}>
      <input
        id={name}
        onChange={handleChange}
        name={name}
        type="checkbox"
        className={styles.checkbox}
      />
      <label
        htmlFor={name}
        className={`${error && error?.length > 0 ? styles['label-error'] : ''} ${styles.label}`}
      >
        {children}
      </label>
    </div>
  )
}

export default Checkbox
