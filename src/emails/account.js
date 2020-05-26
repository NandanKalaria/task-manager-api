const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nandankalaria@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let us know how you get alog with app.`
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nandankalaria@gmail.com',
        subject: 'We are sad to see you go',
        text: `Thanks for using our app. ${name} let us know where we can improve so that we can see you again.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}