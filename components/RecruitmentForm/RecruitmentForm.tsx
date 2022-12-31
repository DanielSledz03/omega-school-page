import { Fragment, useEffect } from 'react'
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
import useWindowDimensions from '../../hooks/useWindowDimensions'

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
  schoolYear: '',
  class: '',
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
  const { width } = useWindowDimensions()
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
    validateOnBlur,
    validateOnChange,
  } = useFormik({
    initialValues: {
      ...StudentInitialValues,
      ...GeneralDataInitialValues,
      ...RulesAndRODO,
      ...ParentsInitialValues,
    },

    validationSchema: Yup.object({
      schoolYear: Yup.string().required().notOneOf(['Wybierz rok szkolny']),
      class: Yup.string().required().notOneOf(['Wybierz klasę']),
      fullName: Yup.string().required(),
      peselOrPassportNumber: Yup.string().required(),
      dateAndPlaceOfBirth: Yup.string().required(),
      address: Yup.string().required(),
      parentFullName: Yup.string().required(),
      parentAddress: Yup.string().required(),
      email: Yup.string().email().required(),
      phoneNumber: Yup.string().required(),
      rulesAccept: Yup.boolean().isTrue(),
      rodoAccept: Yup.boolean().isTrue(),
    }),

    onSubmit: (values) => {
      validateForm()
      // fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     Accept: 'application/json, text/plain, */*',
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(values),
      // })
      //   .then((res) => {
      //     console.log('Response received')
      //     if (res.status === 200) {
      //       console.log('Response succeeded!')
      //     }
      //   })
      // .catch((err) => console.log(err))
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
          handleBlur={() => null}
          name="class"
          error={touched.class ? errors.class : ''}
        />

        <Select
          placeholder="Wybierz rok szkolny"
          label="Wybierz rok szkolny"
          selectedValue={values.schoolYear}
          valueList={['2022/2023', '2023/2024', '2024/2025']}
          handleChange={handleChange}
          handleBlur={handleBlur}
          name="schoolYear"
          error={touched.schoolYear ? errors.schoolYear : ''}
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
          error={touched.peselOrPassportNumber ? errors.peselOrPassportNumber : ''}
        />
        <Input
          label="Data i miejsce urodzenia*"
          name="dateAndPlaceOfBirth"
          placeholder="Wpisz datę i miejsce urodzenia ucznia"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.dateAndPlaceOfBirth}
          error={touched.dateAndPlaceOfBirth ? errors.dateAndPlaceOfBirth : ''}
        />
        <Input
          label="Adres zamieszkania*"
          name="address"
          placeholder="Wpisz adres zamieszkania ucznia"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.address}
          error={touched.address ? errors.address : ''}
        />
        <Input
          label="Adres zameldowania (jeśli jest inny niż zamieszkania)"
          name="registeredAddress"
          placeholder="Wpisz adres zameldowania ucznia"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.registeredAddress}
          error={touched.registeredAddress ? errors.registeredAddress : ''}
        />
        <Input
          label="Nazwa i adres szkoły obwodowej"
          name="districtSchoolData"
          placeholder="Wpisz nazwę i adres szkoły obwodowej ucznia"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.districtSchoolData}
          error={touched.districtSchoolData ? errors.districtSchoolData : ''}
        />

        <RadioButtons
          label="Czy uczeń posiada opinię?"
          name="medicalOpinion"
          setFieldValue={setFieldValue}
          error={touched.medicalOpinion ? errors.medicalOpinion : ''}
        />

        <RadioButtons
          label="Czy uczeń posiada orzeczenie zdrowotne?"
          name="healthCertificate"
          setFieldValue={setFieldValue}
          error={touched.healthCertificate ? errors.healthCertificate : ''}
        />

        <Textarea
          label="Inne istotne informacje (np. o występowaniu specyficznych trudności o stanie zdrowia, przebytych chorobach itp.)"
          name="otherRelevantInformation"
          placeholder="Wpisz inne informacje o uczniu"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.otherRelevantInformation}
          error={touched.otherRelevantInformation ? errors.otherRelevantInformation : ''}
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
          error={touched.parentFullName ? errors.parentFullName : ''}
        />

        <Input
          label="Adres zamieszkania"
          name="parentAddress"
          placeholder="Wpisz adres zamieszkania rodzica / opiekuna prawnego"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.parentAddress}
          error={touched.parentAddress ? errors.parentAddress : ''}
        />

        <Input
          label="Telefon kontaktowy"
          name="phoneNumber"
          placeholder="Wpisz numer telefonu rodzica / opiekuna prawnego"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.phoneNumber}
          error={touched.phoneNumber ? errors.phoneNumber : ''}
          type="tel"
        />

        <Input
          label="Adres e-mail"
          name="email"
          placeholder="Wpisz adres e-mail rodzica / opiekuna prawnego"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.email}
          error={touched.email ? errors.email : ''}
          type="email"
        />
      </div>

      <div className={styles['agreements-section-container']}>
        <Checkbox
          name="rulesAccept"
          value={values.rulesAccept}
          error={touched.rulesAccept ? errors.rulesAccept : ''}
          setFieldValue={setFieldValue}
        >
          Oświadczam, że zapoznałem/łam się z informacją dotyczącą przetwarzania moich danych
          osobowych dostępną pod adresem{' '}
          <a className={`${errors.rulesAccept ? 'text-[red]' : 'text-[#579CE2]'} `}>
            www.omegaszkola.pl/{width! < 568 && <br />}
            regulaminy
          </a>
        </Checkbox>

        <Checkbox
          name="rodoAccept"
          value={values.rodoAccept}
          setFieldValue={setFieldValue}
          error={touched.rodoAccept ? errors.rodoAccept : ''}
        >
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
