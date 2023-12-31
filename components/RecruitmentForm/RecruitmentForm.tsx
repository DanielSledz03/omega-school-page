import { useFormik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import * as Yup from 'yup';
import Checkbox from './components/Checkbox/Checkbox';
import { Input } from './components/Input/Input';
import RadioButtons from './components/RadioButtons/RadioButtons';
import { Select } from './components/Select/Select';
import { Textarea } from './components/Textarea/Textarea';
import styles from './RecruitmentForm.module.css';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import EllipsesLeft from '../../public/assets/EllipsesLeft.svg';
import EllipsesRight from '../../public/assets/EllipsesRight.svg';
import { GeneralData } from '../../types/general-data.type';
import { ParentsData } from '../../types/parents-data.type';
import { StudentData } from '../../types/student-data.type';
import Button from '../Button/Button';

const StudentInitialValues: StudentData = {
  fullName: '',
  peselOrPassportNumber: '',
  dateAndPlaceOfBirth: '',
  address: '',
  registeredAddress: '',
  districtSchoolData: '',
  healthCertificate: undefined,
  medicalOpinion: undefined,
  otherRelevantInformation: '',
};

const ParentsInitialValues: ParentsData = {
  parentFullName: '',
  parentAddress: '',
  email: '',
  phoneNumber: '',
};

const GeneralDataInitialValues: GeneralData = {
  schoolYear: '',
  class: '',
};

const RulesAndRODO = {
  rulesAccept: false,
  rodoAccept: false,
};

const RecruitmentForm = () => {
  const [mailSendStatus, setMailSendStatus] = useState('');
  const { width } = useWindowDimensions();
  // alert(width)

  const {
    handleChange,
    values,
    handleBlur,
    errors,
    touched,
    setFieldValue,
    handleSubmit,
    isValid,
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
      rulesAccept: Yup.boolean().isTrue().required(),
      rodoAccept: Yup.boolean().isTrue().required(),
      healthCertificate: Yup.boolean().required(),
      medicalOpinion: Yup.boolean().required(),
    }),

    onSubmit: (values, { resetForm }) => {
      setMailSendStatus('In Progress');
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
        .then((res) => {
          if (res.status === 200) {
            resetForm();
            setMailSendStatus('Success');
          }
        })
        .catch((err) => {
          setMailSendStatus('Error');
          console.error(err);
        });
    },
  });

  useEffect(() => {
    if (mailSendStatus === 'No Valid' && Object.keys(errors).length === 0) {
      if (isValid) {
        setMailSendStatus('');
      }
    }
  }, [values, errors, isValid, mailSendStatus]);

  const SendButton = () => {
    switch (mailSendStatus) {
      case '':
        return (
          <Button
            dataCypress="send-button"
            label="Wyślij formularz rekrutacyjny"
            onClick={() => {
              handleSubmit();
              if (!isValid) {
                setMailSendStatus('No Valid');
              }
            }}
            buttonColor="bg-[#FAC13C]"
            textColor="text-[#ffffff]"
            className={styles['send-button']}
          />
        );

      case 'Success':
        return (
          <Button
            label="Wiadomość została wysłana"
            onClick={() => handleSubmit()}
            buttonColor="bg-[#00C213]"
            textColor="text-[#ffffff]"
            className={styles['send-button']}
          />
        );

      case 'In Progress':
        return (
          <Button
            label="Trwa wysyłanie..."
            onClick={() => handleSubmit()}
            buttonColor="bg-[#FAC13C]"
            textColor="text-[#ffffff]"
            className={styles['send-button']}
          />
        );

      case 'No Valid':
        return (
          <Button
            label="Wypełnij wymagane pola!"
            onClick={() => handleSubmit()}
            buttonColor="bg-[red]"
            textColor="text-[#ffffff]"
            className={styles['send-button']}
          />
        );

      case 'Error':
        return (
          <Button
            label="Błąd podczas wysyłania"
            onClick={() => handleSubmit()}
            buttonColor="bg-[red]"
            textColor="text-[#ffffff]"
            className={styles['send-button']}
          />
        );

      default:
        return (
          <Button
            label="Poprawnie wypełniono formularz"
            onClick={() => handleSubmit()}
            buttonColor="bg-[#green]"
            textColor="text-[#ffffff]"
            className={styles['send-button']}
          />
        );
    }
  };

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
          ]}
          name="class"
          setFieldValue={(name, value) => setFieldValue(name, value)}
          error={touched.class ? errors.class : ''}
        />

        <Select
          placeholder="Wybierz rok szkolny"
          label="Wybierz rok szkolny"
          selectedValue={values.schoolYear}
          valueList={['2022/2023', '2023/2024', '2024/2025', '2025/2026']}
          name="schoolYear"
          setFieldValue={(name, value) => setFieldValue(name, value)}
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
          error={
            touched.peselOrPassportNumber ? errors.peselOrPassportNumber : ''
          }
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
          label="Czy uczeń posiada opinię Poradni Psychologiczno-Pedagogicznej?*"
          name="medicalOpinion"
          setFieldValue={setFieldValue}
          error={touched.medicalOpinion ? errors.medicalOpinion : ''}
        />

        <RadioButtons
          label="Czy uczeń posiada orzeczenie zdrowotne?*"
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
          error={
            touched.otherRelevantInformation
              ? errors.otherRelevantInformation
              : ''
          }
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
          Oświadczam, że zapoznałem/łam się z informacją dotyczącą przetwarzania
          moich danych osobowych dostępną pod adresem{' '}
          <Link
            href="/Przetwarzanie-Danych.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              touched.rulesAccept && errors.rulesAccept
                ? 'text-[red]'
                : 'text-[#579CE2]'
            } `}
          >
            www.omegaszkola.pl/przetwarzanie-danych
          </Link>
          , {width < 568 && <br />}
          oraz z{' '}
          <Link
            href="/Regulamin.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              touched.rulesAccept && errors.rulesAccept
                ? 'text-[red]'
                : 'text-[#579CE2]'
            } `}
          >
            regulaminem rekrutacji.
          </Link>
        </Checkbox>

        <Checkbox
          name="rodoAccept"
          value={values.rodoAccept}
          setFieldValue={setFieldValue}
          error={touched.rodoAccept ? errors.rodoAccept : ''}
        >
          Wyrażam zgodę na przetwarzanie moich danych osobowych przez Społeczne
          Towarzystwo Edukacyjne z siedzibą w Katowicach ul. Gliwicka 276, w
          celach postępowania rekrutacyjnego do Społecznej Szkoły Podstawowej
          OMEGA
        </Checkbox>
      </div>
      <div
        className={`py-4 md:py-6   ${styles['agreements-section-container']}`}
      >
        <div>
          <p className=" text-center text-[#4F4F4F] text-[14px] block md:text-start md:text-[18px] xl:text-[14px] xl:block xl:w-full ">
            Terminarz rekrutacji jest dostępny pod adresem{' '}
            <Link
              href="/Terminarz.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[14px] text-[#579CE2] md:text-[20px] xl:text-[14px] `}
            >
              www.omegaszkola.pl/terminarz
            </Link>
          </p>
        </div>
      </div>
      <div className={styles['button-container']}>
        <SendButton />
      </div>
    </Fragment>
  );
};

export default RecruitmentForm;
