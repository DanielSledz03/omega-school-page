import Navbar from '../Navbar/Navbar'
import ArrowBlue from '../../public/assets/rightDarkBlueArrow.svg'
import Button from '../Button/Button'
import styles from './PageHeader.module.css'

interface IProps {
  title: string
  titleSpan: string
  paragraph: string
  onClick: () => void
  buttonTitle: string
  bgUrl: string
  bgXlUrl: string
  bgStyle?: React.CSSProperties
  textContainerStyles?: any
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
}: IProps) => {
  return (
    <div style={bgStyle} className={`${bgUrl}  ${bgXlUrl}  ${styles.container} `}>
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
      </div>
    </div>
  )
}
