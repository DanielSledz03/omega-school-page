import { MouseEventHandler } from 'react'
import styles from './Button.module.css'
import Arrow from '../../public/assets/rightArrow.svg'
import Image from 'next/image'

interface IButton {
  onClick: MouseEventHandler<HTMLButtonElement>
  label: string
  buttonColor?: string
  textColor?: string
  className?: string
  arrowSrc?: any
}

const Button = ({
  onClick,
  label,
  buttonColor,
  textColor,
  className,
  arrowSrc = Arrow,
}: IButton) => {
  return (
    <button
      onClick={onClick}
      className={`${className ? className : ''} ${buttonColor ? buttonColor : 'bg-white'} ${
        textColor ? textColor : 'text-[#071E4A]'
      } ${styles['button']}`}
    >
      {label}

      <div className={styles.arrow}>
        <Image src={arrowSrc} alt="s" style={{ height: '100%', objectFit: 'contain' }} />
      </div>
    </button>
  )
}

export default Button
