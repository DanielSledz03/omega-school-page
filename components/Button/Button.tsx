import Image from 'next/image';
import { MouseEventHandler } from 'react';
import styles from './Button.module.css';
import Arrow from '../../public/assets/rightArrow.svg';

interface IButton {
  onClick: MouseEventHandler<HTMLButtonElement>;
  label: string;
  buttonColor?: string;
  textColor?: string;
  className?: string;
  arrowSrc?: any;
  dataCypress?: string;
}

const Button = ({
  onClick,
  label,
  buttonColor,
  textColor,
  className,
  arrowSrc = Arrow,
  dataCypress,
}: IButton) => {
  return (
    <button
      data-cypress={dataCypress}
      onClick={onClick}
      className={`${className ? className : ''} ${
        buttonColor ? buttonColor : 'bg-white'
      } ${textColor ? textColor : 'text-[#071E4A]'} ${styles['button']}`}
    >
      {label}

      <div className={styles.arrow}>
        <Image
          src={arrowSrc}
          alt="s"
          style={{ height: '100%', objectFit: 'contain' }}
        />
      </div>
    </button>
  );
};

export default Button;
