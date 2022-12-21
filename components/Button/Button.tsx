import { MouseEventHandler } from 'react'
import styles from './Button.module.css'

interface IButton {
  onClick: MouseEventHandler<HTMLButtonElement>
  label: string
  buttonColor?: string
  textColor?: string
}

const Button = ({ onClick, label, buttonColor, textColor }: IButton) => {
  return (
    <button
      onClick={onClick}
      className={`${buttonColor ? buttonColor : 'bg-white'} ${
        textColor ? textColor : 'text-[#071E4A]'
      } ${styles['button']}`}
    >
      {label}
    </button>
  )
}

export default Button
