import Image from 'next/image'
import styles from '../FormComponents.module.css'
import ArrowUp from '../../../../public/assets/select/arrowUp.svg'
import { useState, useRef, Fragment } from 'react'
import useOutsideClick from '../../../../hooks/useOutsideClick'
interface IProps {
  label: string
  name: string
  placeholder: string
  selectedValue?: string
  valueList: string[]
  error?: string
  setFieldValue: (name: string, value: string) => any
}

export const Select = ({
  error,
  label,
  selectedValue = '',
  valueList,
  placeholder,
  setFieldValue,
  name,
}: IProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const selectBGRef = useRef(null)

  useOutsideClick(selectBGRef, () => {
    setIsExpanded(false)
  })
  console.log(!isExpanded && selectedValue === '')
  return (
    <Fragment>
      {isExpanded && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.3)] z-[890]"></div>
      )}
      <div ref={selectBGRef} className={styles['select-container']}>
        <label className={`${error && error.length > 0 && styles['label-error']} ${styles.label}`}>
          {label} {error && '- pole obowiązkowe'}
        </label>

        <div
          className={`${isExpanded ? 'bg-white z-[900]' : 'bg-[#FAFAFA]'} ${
            error && error.length > 0 && styles['select-error']
          } w-full flex absolute flex-col block border-[1px] border-[#E4E4E4] mb-7 rounded-3xl  text-[black] md:text-xl xl:text-base `}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <div className="w-full h-[50px] flex items-center justify-between p-3 hover:cursor-pointer">
            <p
              className={`${
                !isExpanded && selectedValue === '' ? 'text-[rgb(159,166,178)]' : ''
              } text-[18px] font-[300]`}
            >
              {isExpanded ? placeholder : selectedValue === '' ? placeholder : selectedValue}
            </p>
            <Image src={ArrowUp} alt="ArrowUp" className={`${!isExpanded ? 'rotate-180' : ''}`} />
          </div>
          {isExpanded &&
            valueList.map((item) => (
              <div
                key={item}
                onClick={() => {
                  setFieldValue(name, item)
                }}
                className="w-full h-[50px] flex items-center p-3 border-t-[1px] hover:bg-[#FAFAFA]"
              >
                <p className="text-[18px]">{item}</p>
              </div>
            ))}
        </div>
      </div>
    </Fragment>
  )
}
