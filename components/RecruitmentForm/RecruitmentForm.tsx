import { Fragment } from 'react'
import { useFormik } from 'formik'
import { Input } from './components/Input/Input'
import { StudentData } from '../../types/student-data.type'
import * as Yup from 'yup'
import { Textarea } from './components/Textarea/Textarea'
import RadioButtons from './components/RadioButtons/RadioButtons'
import styles from './RecruitmentForm.module.css'
import { GeneralData } from '../../types/general-data.type'
import { Select } from './components/Select/Select'
import { ParentsData } from '../../types/parents-data.type'
import Checkbox from './components/Checkbox/Checkbox'
import Button from '../Button/Button'
import Image from 'next/image'
import EllipsesLeft from '../../public/assets/EllipsesLeft.svg'
import EllipsesRight from '../../public/assets/EllipsesRight.svg'

const StudentInitialValues: StudentData = {
  fullName: '',
  peselOrPassportNumber: '',
  dateAndPlaceOfBirth: '',
  address: '',
  registeredAddress: '',
  districtSchoolData: '',
  healthCertificate: false,
  medicalOpinion: false,
  otherRelevantInformation: '',
}

const ParentsInitialValues: ParentsData = {
  parentFullName: '',
  parentAddress: '',
  email: '',
  phoneNumber: '',
}

const GeneralDataInitialValues: GeneralData = {
  schoolYear: 'Wybierz rok szkolny',
  class: 'Wybierz klasę',
}

const RulesAndRODO = {
  rulesAccept: false,
  rodoAccept: false,
}

const REQUIRED_FIELDS = [
  'fullName',
  'peselOrPassportNumber',
  'dateAndPlaceOfBirth',
  'address',
  'parentFullName',
  'parentAddress',
  'email',
  'phoneNumber',
]

const RecruitmentForm = () => {
  const {
    handleChange,
    values,
    handleBlur,
    errors,
    touched,
    setFieldValue,
    handleSubmit,
    setFieldError,
    validateForm,
  } = useFormik({
    initialValues: {
      ...StudentInitialValues,
      ...GeneralDataInitialValues,
      ...RulesAndRODO,
      ...ParentsInitialValues,
    },

    validationSchema: Yup.object().shape({
      fullName: Yup.string().min(1),
      peselOrPassportNumber: Yup.string().min(1),
      dateAndPlaceOfBirth: Yup.string().min(1),
      address: Yup.string().min(1),
      parentFullName: Yup.string().min(1),
      parentAddress: Yup.string().min(1),
      email: Yup.string().email(),
      phoneNumber: Yup.string().min(1),
      // rulesAccept: Yup.boolean().isTrue(),
      // rodoAccept: Yup.boolean().isTrue(),
    }),

    onSubmit: (values) => {
      validateForm()

      let isValidate = true
      const obj: any = values

      Object.keys(values).forEach((item: any) => {
        if (obj[item].length <= 0 && REQUIRED_FIELDS.includes(item)) {
          setFieldError(item, 'error')
          isValidate = false
        }
      })

      if (values.schoolYear === GeneralDataInitialValues.schoolYear) {
        setFieldError('schoolYear', 'error')
        isValidate = false
      }

      if (values.class === GeneralDataInitialValues.class) {
        setFieldError('class', 'error')
        isValidate = false
      }

      if (isValidate) {
        alert('Wysłano!')
      }
    },
  })

  console.log(values)

  return (
    <Fragment>
      <div className={styles['header2-container']}>
        <div className={styles['ellipses-left']}>
          <Image src={EllipsesLeft} alt="EllipsesLeft" />
        </div>

        <div className={styles['ellipses-right']}>
          <Image src={EllipsesRight} alt="EllipsesRight" />
        </div>

        <h2 className={styles.header2}>Rekrutacja on-line</h2>
      </div>
      <div className={styles['section-container']}>
        <h3 className={styles.header3}>Dane ogólne</h3>
        <Select
          placeholder="Wybierz klasę"
          label="Wybierz klasę"
          selectedValue={values.class}
          valueList={[
            'Podstawówka - klasa 1',
            'Podstawówka - klasa 2',
            'Podstawówka - klasa 3',
            'Podstawówka - klasa 4',
            'Podstawówka - klasa 5',
            'Podstawówka - klasa 6',
            'Podstawówka - klasa 7',
            'Podstawówka - klasa 8',
            'Liceum - klasa 1',
            'Liceum - klasa 2',
            'Liceum - klasa 3',
            'Liceum - klasa 4',
          ]}
          handleChange={handleChange}
          handleBlur={handleBlur}
          name="class"
          error={errors.class}
        />

        <Select
          placeholder="Wybierz rok szkolny"
          label="Wybierz rok szkolny"
          selectedValue={values.schoolYear}
          valueList={['2022/2023', '2023/2024', '2024/2025']}
          handleChange={handleChange}
          handleBlur={handleBlur}
          name="schoolYear"
          error={errors.schoolYear}
        />
      </div>

      <div className={styles['section-container']}>
        <h3 className={styles.header3}>Dane ucznia</h3>
        <Input
          label="Imiona i nazwisko*"
          name="fullName"
          placeholder="Wpisz imiona i nazwisko ucznia"
          handleChange={handleChange}
          value={values.fullName}
          handleBlur={handleBlur}
          error={touched.fullName ? errors.fullName : ''}
        />
        <Input
          label="PESEL (lub w przypadku jego braku - numer paszportu)*"
          placeholder="Wpisz numer PESEL"
          name="peselOrPassportNumber"
          handleChange={handleChange}
          value={values.peselOrPassportNumber}
          handleBlur={handleBlur}
          error={errors.peselOrPassportNumber}
        />
        <Input
          label="Data i miejsce urodzenia*"
          name="dateAndPlaceOfBirth"
          placeholder="Wpisz datę i miejsce urodzenia ucznia"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.dateAndPlaceOfBirth}
          error={errors.dateAndPlaceOfBirth}
        />
        <Input
          label="Adres zamieszkania*"
          name="address"
          placeholder="Wpisz adres zamieszkania ucznia"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.address}
          error={errors.address}
        />
        <Input
          label="Adres zameldowania (jeśli jest inny niż zamieszkania)"
          name="registeredAddress"
          placeholder="Wpisz adres zameldowania ucznia"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.registeredAddress}
          error={errors.registeredAddress}
        />
        <Input
          label="Nazwa i adres szkoły obwodowej"
          name="districtSchoolData"
          placeholder="Wpisz nazwę i adres szkoły obwodowej ucznia"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.districtSchoolData}
          error={errors.districtSchoolData}
        />

        <RadioButtons
          label="Czy uczeń posiada opinię?"
          name="medicalOpinion"
          setFieldValue={setFieldValue}
          error={errors.medicalOpinion}
        />

        <RadioButtons
          label="Czy uczeń posiada orzeczenie zdrowotne?"
          name="healthCertificate"
          setFieldValue={setFieldValue}
          error={errors.healthCertificate}
        />

        <Textarea
          label="Inne istotne informacje (np. o występowaniu specyficznych trudności o stanie zdrowia, przebytych chorobach itp.)"
          name="otherRelevantInformation"
          placeholder="Wpisz inne informacje o uczniu"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.otherRelevantInformation}
          error={errors.otherRelevantInformation}
        />
      </div>
      <div className={styles['section-container']}>
        <h3 className={styles.header3}>Dane rodziców / opiekunów prawnych</h3>

        <Input
          label="Imiona i nazwisko"
          name="parentFullName"
          placeholder="Wpisz imiona i nazwisko rodzica / opiekuna prawnego"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.parentFullName}
          error={errors.parentFullName}
        />

        <Input
          label="Adres zamieszkania"
          name="parentAddress"
          placeholder="Wpisz adres zamieszkania rodzica / opiekuna prawnego"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.parentAddress}
          error={errors.parentAddress}
        />

        <Input
          label="Telefon kontaktowy"
          name="phoneNumber"
          placeholder="Wpisz numer telefonu rodzica / opiekuna prawnego"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.phoneNumber}
          error={errors.phoneNumber}
          type="tel"
        />

        <Input
          label="Adres e-mail"
          name="email"
          placeholder="Wpisz adres e-mail rodzica / opiekuna prawnego"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.email}
          error={errors.email}
          type="email"
        />
      </div>

      <div className={styles['agreements-section-container']}>
        <Checkbox name="rulesAccept" handleChange={handleChange}>
          Oświadczam, że zapoznałem/łam się z informacją dotyczącą przetwarzania moich danych
          osobowych dostępną pod adresem{' '}
          <a className="text-[#579CE2]">www.omegaszkola.pl/regulaminy</a>
        </Checkbox>

        <Checkbox name="rodoAccept" handleChange={handleChange}>
          Wyrażam zgodę na przetwarzanie moich danych osobowych przez xxxxxxxxx z siedzibą we
          xxxxxxx, w celach postępowania rekrutacyjnego do Szkoła Podstawowa i Przedszkole OMEGA
        </Checkbox>
      </div>
      <div className="mt-7 py-4 xl:flex xl:justify-center xl:items-center">
        <Button
          label="Wyślij formularz rekrutacyjny"
          onClick={() => handleSubmit()}
          buttonColor="bg-[#FAC13C]"
          textColor="text-[#ffffff]"
          className={styles['send-button']}
        />
      </div>
    </Fragment>
  )
}

export default RecruitmentForm
