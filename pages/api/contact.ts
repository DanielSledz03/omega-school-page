/* eslint-disable import/no-anonymous-default-export */
export default function (req: any, res: any) {
  require('dotenv').config({ path: `${__dirname}/../../.env` })

  var nodemailer = require('nodemailer')
  var transport = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.SENDER,
      pass: process.env.PASSWORD,
    },
  })

  const values = req.body

  console.log(values.class)

  var mailToSchool = {
    from: values.email,
    to: 'danielsledz2003@gmail.com',
    subject: 'Formularz rekrutacyjny ' + values.class,
    html: `<div style="width: 800px; margin-left: auto; margin-right: auto"> <h2>Dane ogólne:</h2> <table style="font-family: arial, sans-serif;border-collapse: collapse;width: 100%;"> <tr> <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">Klasa</td> <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">${
      values.class
    }</td> </tr> <tr> <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">Rok szkolny</td> <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">${
      values.schoolYear
    }</td> </tr> </table> <h2>Dane ucznia:</h2> <table style="font-family: arial, sans-serif;border-collapse: collapse;width: 100%;"> <tr> <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">Imię i nazwisko</td> <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">${
      values.fullName
    }</td> </tr> <tr> <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">PESEL</td> <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">${
      values.peselOrPassportNumber
    }</td> </tr> <tr> <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">Data i miejsce urodzenia</td> <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">${
      values.dateAndPlaceOfBirth
    }</td> </tr> <tr> <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">Adres zamieszkania</td> <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">${
      values.address
    }</td> </tr> <tr> <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">Adres zameldowania</td> <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">${
      values.registeredAddress
    }</td> </tr> <tr> <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">Nazwa i adres szkoły obwodowej</td> <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">${
      values.districtSchoolData
    }</td> </tr> <tr> <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">Czy uczeń posiada opinię?</td> <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">${
      values.medicalOpinion ? 'Tak' : 'Nie'
    }</td> </tr> <tr> <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">Czy uczeń posiada orzeczenie zdrowotne?</td> <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">${
      values.healthCertificate ? 'Tak' : 'Nie'
    }</td> </tr> <tr> <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">Inne istotne informacje</td> <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">${
      values.otherRelevantInformation
    }</td> </tr> </table> <h2>Dane rodziców:</h2> <table style="font-family: arial, sans-serif;border-collapse: collapse;width: 100%;"> <tr> <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">Imię i nazwisko</td> <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">${
      values.parentFullName
    }</td> </tr> <tr> <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">Adres zamieszkania</td> <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">${
      values.parentAddress
    }</td> </tr> <tr> <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">Telefon kontaktowy</td> <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">${
      values.phoneNumber
    }</td> </tr> <tr> <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">Adres e-mail</td> <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">${
      values.email
    }</td> </tr> </table> </div>`,
  }

  var mailToParent = {
    from: 'Szkoła Omega',
    to: values.email,
    subject: 'Potwierdzenie wysłania formularza rekrutacyjnego ' + values.fullName,
    html: ` 
    <div
    style="
      display: block;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      font-family: Arial;
    "
  >
    <table style="width: 100%">
      <tr
        style="
          width: 100%;
          height: 120px;
          background-color: #071e4a;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          padding-top: 10px;
        "
      >
        <th style="height: 50%; object-fit: contain">
          <img
            src="https://omega-school.vercel.app/_next/static/media/logo.210d059f.svg"
            style="height: 100%"
          />
        </th>
        <th>
          <p style="color: white; font-weight: 700">
            Społeczna Szkoła Podstawowa - OMEGA w Katowicach
          </p>
        </th>
      </tr>
    </table>
    <table style="width: 100%">
      <tr
        style="
          display: flex;
          flex-direction: column;
          background: #071e4a;
          width: 100%;
          padding: 10px;
          margin-left: auto;
          margin-right: auto;
        "
      >
        <td style="width: 100%; display: flex">
          <p style="color: white; font-weight: 700; font-size: 14px; width: 50%">
            Społeczna Szkoła Podstawowa OMEGA im. Górnośląskich Noblistów w Katowicach
          </p>
          <div style="width: 50%; display: flex; justify-content: end; align-items: center">
            <a style="margin: 0 10px"
              ><img
                src="https://omega-school.vercel.app/_next/static/media/YoutubeIcon.3bbdca57.svg"
            /></a>
            <a
              ><img
                src="https://omega-school.vercel.app/_next/static/media/FacebookIcon.e220430f.svg"
            /></a>
          </div>
        </td>
        <td
          style="
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            margin-top: 20px;
            color: white;
          "
        >
          <span style="font-weight: 700">Kontakt</span>
          <p style="font-weight: 400; font-size: 14px">
            40-862 Katowice<br />
            ul.Gliwicka 276
          </p>
          <div>
            <p style="font-weight: 400; font-size: 14px">
              tel. <b>32 254 51 24</b><br />
              tel. kom. <b>+48 535 890 098</b><br />
              mail: <b>sekretariat@omegaszkola.pl</b>
            </p>
          </div>
        </td>
      </tr>

      <tr style="display: flex; flex-direction: column; align-items: center">
        <div
          style="
            width: 540px;
            height: 262px;
            border-radius: 25px;
            background-size: cover;
            background-image: url(bg2.svg);
            margin-top: 20px;
            margin-bottom: 20px;
          "
        ></div>
        <p
          style="
            display: block;
            width: 475px;
            font-weight: 400;
            font-size: 16px;
            color: #071e4a;
            margin-bottom: 30px;
          "
        >
          <span style="font-weight: 700"
            >Z przyjemnością informujemy, że Twoje zgłoszenie trafiło do naszej skrzynki.</span
          >
          W najbliższym czasie skontaktuje się z Tobą pracownik naszej szkoły, aby omówić
          szczegóły rekrutacji.
        </p>
      </tr>
    </table>
  </div>`,
    attachments: [
      {
        filename: 'logo.png',
        path: process.cwd() + '/public/email_template/logo.png',
        cid: 'logo@kreata.ee', //my mistake was putting "cid:logo@cid" here!
      },
    ],
  }
  transport.sendMail(mailToSchool, (error: any, info: any) => {
    if (error) {
      return console.log(error)
    }
    console.log('Message sent: %s', info.messageId)
  })
  transport.sendMail(mailToParent, (error: any, info: any) => {
    if (error) {
      return console.log(error)
    }
    console.log('Message sent: %s', info.messageId)
  })
  res.status(200)
}
