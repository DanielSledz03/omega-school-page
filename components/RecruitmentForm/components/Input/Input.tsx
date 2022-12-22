import { HTMLInputTypeAttribute } from 'react'
import styles from '../FormComponents.module.css'

interface IProps {
  label: string
  name: string
  placeholder: string
  handleChange: any
  handleBlur: any
  value?: string
  error?: string
  type?: HTMLInputTypeAttribute
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
    <div className="flex flex-col w-full xl:w-1/2">
      <label className={`${error && error.length > 0 && styles['label-error']} ${styles.label}`}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        className={`${error && error.length > 0 && styles['input-error']} ${styles.input} `}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
    </div>
  )
}
