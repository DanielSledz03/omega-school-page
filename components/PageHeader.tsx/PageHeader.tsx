import Navbar from '../Navbar/Navbar'
import ArrowBlue from '../../public/assets/rightDarkBlueArrow.svg'
import Button from '../Button/Button'
import styles from './PageHeader.module.css'
import Link from 'next/link'
import Image from 'next/image'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import { useState } from 'react'

interface IProps {
  title: string
  titleSpan: string
  titleSpanColor?: string
  paragraph: string
  onClick: () => void
  buttonTitle: string
  bgUrl: any
  bgXlUrl: any
  textContainerStyles?: any
  checkKindergarten?: boolean
}

export const PageHeader = ({
  onClick,
  title,
  titleSpan,
  titleSpanColor,
  paragraph,
  buttonTitle,
  bgUrl,
  bgXlUrl,
  textContainerStyles,
  checkKindergarten = false,
}: IProps) => {
  const { width } = useWindowDimensions()
  return (
    <div className={` ${styles.container} `}>
      <div className="w-full h-full absolute z-[-1]">
        {width && (
          <Image
            src={width >= 1280 ? bgXlUrl : bgUrl}
            alt="head iamge"
            className="w-full object-cover h-full"
            loading="eager"
            quality={100}
          />
        )}
      </div>
      <Navbar />
      <div className={`${textContainerStyles} ${styles['texts-container']}`}>
        <div>
          <h1 className={styles['header1']}>{title}</h1>
          <span
            style={{ color: titleSpanColor ? titleSpanColor : '#FAC13C' }}
            className={styles['header1-span']}
          >
            {titleSpan}
          </span>
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
            className="font-[700] text-white underline mt-3 md:text-[25px] hover:text-[#FAC13C] duration-300 xl:mt-8"
          >
            Sprawdź nasze przedszkole!
          </Link>
        )}
      </div>
    </div>
  )
}
