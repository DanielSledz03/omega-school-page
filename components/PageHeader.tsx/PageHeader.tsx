import Navbar from '../Navbar/Navbar'
import ArrowBlue from '../../public/assets/rightDarkBlueArrow.svg'
import Button from '../Button/Button'
import styles from './PageHeader.module.css'
import Link from 'next/link'

interface IProps {
  title: string
  titleSpan: string
  paragraph: string
  onClick: () => void
  buttonTitle: string
  bgUrl: string
  bgXlUrl: string
  bgStyle?: React.CSSProperties
  bgClassStyle?: any
  textContainerStyles?: any
  checkKindergarten?: boolean
}

export const PageHeader = ({
  onClick,
  title,
  titleSpan,
  paragraph,
  buttonTitle,
  bgUrl,
  bgXlUrl,
  textContainerStyles,
  bgStyle = {},
  bgClassStyle,
  checkKindergarten = false,
}: IProps) => {
  return (
    <div style={bgStyle} className={`${bgClassStyle} ${bgUrl}  ${bgXlUrl}  ${styles.container} `}>
      <Navbar />
      <div className={`${textContainerStyles} ${styles['texts-container']}`}>
        <div>
          <h1 className={styles['header1']}>{title}</h1>
          <span className={styles['header1-span']}>{titleSpan}</span>
        </div>
        <p className={styles['paragraph']}>{paragraph}</p>
        <Button
          label={buttonTitle}
          onClick={onClick}
          className={styles['button']}
          arrowSrc={ArrowBlue}
        />

        {checkKindergarten && (
          <Link
            href="https://omegaprzedszkole.pl/"
            target="_blank"
            className="font-[700] text-white underline mt-3 md:text-[30px] hover:text-[#FAC13C] duration-300"
          >
            Sprawdź nasze przedszkole!
          </Link>
        )}
      </div>
    </div>
  )
}
