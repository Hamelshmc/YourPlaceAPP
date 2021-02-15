'use strict';

const sgMail = require('@sendgrid/mail');
const { SENDGRID_API_KEY, SENDGRID_MAIL_TO, SENDGRID_MAIL_FROM, HTTP_SERVER_NAME } = process.env;

async function sendEmail(user, token, email) {
  sgMail.setApiKey(SENDGRID_API_KEY);
  const msg = {
    to: email,
    from: SENDGRID_MAIL_FROM,
    subject: 'TEST',
    text: 'TEST',
    html: `
        <h1>¡Bienvenido a YourPlace!</h1>
        <p>Por favor verifique su cuenta en el siguiente enlace
        <a href="${HTTP_SERVER_NAME}/api/v1/users/verify/${user.id}/${token}">Verify your account here</a></p>`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.info('Email sent');
    })
    .catch((error) => {
      console.error(error);
    });
}

module.exports = sendEmail;
