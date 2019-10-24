const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'arthemg@gmail.com',
        cc:'',
        subject: 'Thanks for joining the app!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'arthemg@gmail.com',
        cc:'',
        subject: 'Sad to see you leave Task App!',
        text: `It was great having you, ${name}. Hopefully you'll be back soon.`
    })
}


module.exports = {
    sendWelcomeEmail: sendWelcomeEmail,
    sendCancellationEmail: sendCancellationEmail
}