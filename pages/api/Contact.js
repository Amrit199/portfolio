// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  auth: {
    user: 'username',
    pass: 'password'
  }
});


export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
