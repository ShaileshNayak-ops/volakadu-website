const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  service: 'gmail',
  secure: false,
  auth: {
    user: 'nayakshailesh369@gmail.com',
    pass: 'shailesh@google'
  }
})
const email = transporter.sendMail({
  from: 'neelesh1nayak@gmail.com',
  to: 'nayakshailesh369@gmail.com',
  subject: 'hello world',
  text: 'Hello World!!!'
})
email.then(console.log)
email.catch(console.error)