/* eslint-disable import/no-anonymous-default-export */
export default async (req: any, res: any) => {
  const path = require('path')
  // require('dotenv').config({ path: path.join(process.cwd() + `/../../.env`) })

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
    to: 'sledziuxjp@gmail.com',
    subject: 'Potwierdzenie wysłania formularza rekrutacyjnego ' + values.fullName,
    html: ` 
    <!DOCTYPE html>
<html
  lang="en"
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  
</html>

    `,
    // attachments: [
    //   {
    //     filename: 'logo.png',
    //     path: path.join(process.cwd() + '/public/email_template/logo.png'),
    //     cid: 'logo@kreata.ee', //my mistake was putting "cid:logo@cid" here!
    //   },
    //   {
    //     filename: 'thanks.png',
    //     path: path.join(process.cwd() + '/public/email_template/thanks.png'),
    //     cid: 'thanks@kreata.ee', //my mistake was putting "cid:logo@cid" here!
    //   },
    //   {
    //     filename: 'ytIcon.png',
    //     path: path.join(process.cwd() + '/public/email_template/ytIcon.png'),
    //     cid: 'ytIcon@kreata.ee', //my mistake was putting "cid:logo@cid" here!
    //   },
    //   {
    //     filename: 'fbIcon.png',
    //     path: path.join(process.cwd() + '/public/email_template/fbIcon.png'),
    //     cid: 'fbIcon@kreata.ee', //my mistake was putting "cid:logo@cid" here!
    //   },
    // ],
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

  await new Promise((resole, reject) => {
    transport.sendMail(mailToParent, (error: any, info: any) => {
      if (error) {
        reject('Error sendMail')
        return console.log(error)
      }
      console.log('Message sent: %s', info.messageId)
      resole('Message send successfully')
      res.status(200)
    })
  })
}
