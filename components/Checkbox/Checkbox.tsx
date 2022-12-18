import styles from './Checkbox.module.css'

interface IProps {
  label: string
  name: string
  setFieldValue: any
  error?: string
}

const Checkbox = ({ error, label, setFieldValue, name }: IProps) => {
  return (
    <>
      <label className={`${error && error.length > 0 && styles['label-error']} ${styles.label}`}>
        {label}
      </label>
      <div className="flex justify-around w-full h-[50px] p-3 rounded-3xl mb-7 bg-[#FAFAFA] px-12">
        <div className="flex items-center">
          <input
            type="radio"
            className="mr-2"
            name={name}
            id={`${name}1`}
            onChange={() => setFieldValue(name, true)}
          />
          <label htmlFor={`${name}1`}>Tak</label>
        </div>

        <div className="flex items-center">
          <input
            type="radio"
            className="mr-2"
            name={name}
            id={`${name}2`}
            onChange={() => setFieldValue(name, false)}
            defaultChecked
          />
          <label htmlFor={`${name}2`}>Nie</label>
        </div>
      </div>
    </>
  )
}

export default Checkbox
