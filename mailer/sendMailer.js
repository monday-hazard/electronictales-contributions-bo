const nodemailer = require('nodemailer');
const authMailerparameter = require('./authMailer');
const hbs = require('nodemailer-express-handlebars');


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

transporter.use('compile' , hbs({
  viewPath: './mailer/views/',
  viewEngine: 'express-handlebars'
}))


function confirmMailPostTopic(userEmail, topicName, slackContributor){
  transporter.sendMail({
    from: `"${authMailerparameter.webSiteName}" <${authMailerparameter.webSiteMail}>`,
    to: userEmail,
    subject: `Merci pour ta suggestion !`,
    template: 'newTopic',
    context:{
      topicName: topicName,
      slackContributor: slackContributor
    }
  });
}

function confirmMailNewUser(userEmail, userName, slackName){
  transporter.sendMail({
    from: `"${authMailerparameter.webSiteName}" <${authMailerparameter.webSiteMail}>`,
    to: userEmail,
    subject: `Welcome !`,
    template: 'newUser',
    context:{
      userName: userName,
      slackName: slackName,
    }
  });
}

function confirmMailPostArticle(currentUserEmail, currentUserName, articleTitle){
  transporter.sendMail({
    from: `"${authMailerparameter.webSiteName}" <${authMailerparameter.webSiteMail}>`,
    to: currentUserEmail,
    subject: `Merci pour ta contribution !`,
    template: 'newArticle',
    context:{
      currentUserName: currentUserName,
      articleTitle: articleTitle,
    }
  });
}


module.exports = {
  confirmMailNewUser,
  confirmMailPostTopic,
  confirmMailPostArticle
}