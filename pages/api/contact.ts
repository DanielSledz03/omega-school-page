/* eslint-disable import/no-anonymous-default-export */
export default async (req: any, res: any) => {
  const path = require('path')
  require('dotenv').config({ path: path.join(process.cwd() + `/../../.env`) })

  const nodemailer = require('nodemailer')
  const transport = nodemailer.createTransport({
    port: 587,
    host: 'smtp.office365.com',
    auth: {
      user: 'template_data',
      pass: 'template_data',
    },
    tls: {
      ciphers: 'SSLv3',
    },
  })

  const values = req.body

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transport.verify(function (error: any, success: any) {
      if (error) {
        console.log(error)
        reject(error)
      } else {
        console.log('Server is ready to take our messages')
        resolve(success)
      }
    })
  })

  const mailToSchool = {
    from: 'template_data',
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

  const mailToParent = {
    from: 'template_data',
    to: values.email,
    subject: 'Potwierdzenie wysłania formularza rekrutacyjnego ' + values.fullName,
    html: ` 
    <!DOCTYPE html>
<html
  lang="en"
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="x-apple-disable-message-reformatting" />
    <title></title>
    <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
    <![endif]-->
    <style>
      table,
      td,
      div,
      h1,
      p {
        font-family: Arial, sans-serif;
      }
      table,
      td {
        border: 0 solid #000000 !important;
      }
    </style>
  </head>
  <body style="margin: 0; padding: 0">
    <table
      role="presentation"
      style="
        width: 600px;
        border-collapse: collapse;
        border: 0;
        border-spacing: 0;
        background: #ffffff;
        margin-left: auto;
        margin-right: auto;
      "
    >
      <tr>
        <td style="padding: 20px 0 20px 0; background: #071e4a" align="center">
          <img src="cid:logo@kreata.ee" alt="" width="115" style="height: auto; display: block" />

          <h2 style="color: white; font-weight: 800; font-size: 16px">
            Społeczna Szkoła Podstawowa Omega w Katowicach
          </h2>
        </td>
      </tr>
      <tr>
        <td style="padding: 20px 20px" align="center">
          <img src="cid:thanks@kreata.ee" alt="" width="540" style="height: auto; display: block" />
          <p
            style="display: block; color: #071e4a; width: 490px; text-align: left; padding: 15px 0"
          >
            <span style="font-weight: 800"
              >Z przyjemnością informujemy, że Twoje zgłoszenie trafiło do naszej skrzynki.</span
            >
            W najbliższym czasie skontaktuje się z Tobą pracownik naszej szkoły, aby omówić
            szczegóły rekrutacji.
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding: 10px 20px; background: #071e4a" align="left">
          <table
            role="presentation"
            style="
              width: 100%;
              border-collapse: collapse;
              border: 0;
              border-spacing: 0;
              height: 50px;
              margin-bottom: 25px;
            "
          >
            <tr>
              <td style="width: 50%; padding: 0; vertical-align: top">
                <h4 style="display: block; width: 280px; color: white ;">
                  Szkoła Podstawowa OMEGA im. Górnośląskich Noblistów w Katowicach
                </h4>
              </td>
              <td
                style="
                  width: 50%;
                  padding: 0;
                  vertical-align: center;
                  horizontal-align: center;
                  text-align: end;
                "
              >
                <a
                  href="https://www.youtube.com/channel/UCQn_lSAlyQnH3CpkMIiLy-g"
                  style="display: inline-block; margin-right: 10px"
                >
                  <img
                    src="cid:ytIcon@kreata.ee"
                    alt=""
                    width="30"
                    style="height: auto; display: block"
                  />
                </a>

                <a
                  href="https://www.facebook.com/zespolszkolomega"
                  style="display: inline-block; margin-right: 10px"
                >
                  <img
                    src="cid:fbIcon@kreata.ee"
                    alt=""
                    width="30"
                    style="height: auto; display: block"
                  />
                </a>
              </td>
            </tr>
          </table>
          <p style="display: block; color: white; font-weight: 800">Kontakt</p>

          <p style="display: block; color: white">
            40-862 Katowice<br />
            ul.Gliwicka 276
          </p>

          <p style="display: block; color: white">
            tel. <b>32 254 51 24</b><br />
            tel. kom. <b>+48 535 890 098</b><br />
            mail: <b>sekretariat@omegaszkola.pl</b>
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>

    `,
    attachments: [
      {
        filename: 'logo.png',
        path: path.join(process.cwd() + '/public/email_template/logo.png'),
        cid: 'logo@kreata.ee', //my mistake was putting "cid:logo@cid" here!
      },
      {
        filename: 'thanks.png',
        path: path.join(process.cwd() + '/public/email_template/thanks.png'),
        cid: 'thanks@kreata.ee', //my mistake was putting "cid:logo@cid" here!
      },
      {
        filename: 'ytIcon.png',
        path: path.join(process.cwd() + '/public/email_template/ytIcon.png'),
        cid: 'ytIcon@kreata.ee', //my mistake was putting "cid:logo@cid" here!
      },
      {
        filename: 'fbIcon.png',
        path: path.join(process.cwd() + '/public/email_template/fbIcon.png'),
        cid: 'fbIcon@kreata.ee', //my mistake was putting "cid:logo@cid" here!
      },
    ],
  }

  await new Promise((resole, reject) => {
    transport.sendMail(mailToSchool, (error: any, info: any) => {
      if (error) {
        reject('Error sendMail')

        return console.log(error)
      }
      console.log('Message sent: %s', info.messageId)
      resole('Success')
    })
  })

  // await new Promise((resole, reject) => {
  //   transport.sendMail(mailToParent, (error: any, info: any) => {
  //     if (error) {
  //       reject('Error sendMail')
  //       return console.log(error)
  //     }
  //     console.log('Message sent: %s', info.messageId)
  //     resole('Message send successfully')
  //     res.status(200)
  //   })
  // })
}
