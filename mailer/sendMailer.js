const nodemailer = require('nodemailer');
const authMailerparameter = require('./authMailer')

// TODO alimenter le readme => npm install nodemailer


let transporter = nodemailer.createTransport({
  host: authMailerparameter.host,
  port: authMailerparameter.port,
  secure: authMailerparameter.securityStatus,
  auth: {
    user: authMailerparameter.webSiteMail,
    pass: authMailerparameter.password
  },
  //add these 3 lines just for local test sending
  tls:{
      rejectUnauthorized: false
  }
});

function confirmMailPostTopic(userEmail, topicName){
  transporter.sendMail({
    from: `"${authMailerparameter.webSiteName}" <${authMailerparameter.webSiteMail}>`,
    to: userEmail,
    subject: `Merci pour ta contribution !`,
    html: `<p>Ehi ! Ton topic <strong>"${topicName}"</strong> a été ajouté</p>`,
  });
}

function confirmMailNewUser(userEmail, userName){
  transporter.sendMail({
    from: `"${authMailerparameter.webSiteName}" <${authMailerparameter.webSiteMail}>`,
    to: userEmail,
    subject: `Welcome ${userName} !`,
    html: `<p>Hello <strong>${userName}</strong> et bienvenue dans la communauté ! </p>`,
  });
}

function confirmMailPostArticle(currentUserEmail, currentUserName, articleTitle){
  transporter.sendMail({
    from: `"${authMailerparameter.webSiteName}" <${authMailerparameter.webSiteMail}>`,
    to: currentUserEmail,
    subject: `Merci pour ton article ${currentUserName}!`,
    html: `<p>Ton article ayant pour titre <strong>${articleTitle}</strong> a bien été enregistré</p>`,
  });
}


module.exports = {
  confirmMailNewUser,
  confirmMailPostTopic,
  confirmMailPostArticle
}