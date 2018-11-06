const express = require('express');
const path = require('path');

const { createServer } = require('http');
const { join } = require('path');
const { parse } = require('url');

const compression = require('compression');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
// const info = require('./private');
const port = parseInt(process.env.PORT, 10) || 3001

const dev = process.env.NODE_ENV !== 'production';
const app = express();

const transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  auth: {
    // user: info.EMAIL,
    // pass: info.PASS
  }
}));

const send = ({ email, name, selected, message }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`
  const mailOptions = {
    from,
    to: 'abuschr00ster@gmail.com',
    subject: `New message from ${from} about ${selected}`,
    text: message,
    replyTo: from
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}

app.use(bodyParser.json())
app.use(compression())
app.use(express.static(path.join(__dirname, 'dist')));
app.post('/contact', (req, res) => {
    const { name, email, selected, message } = req.body;
    send({ email, name, selected, message }).then(() => {
      console.log(`Sent the message "${message}" from <${name}> ${email}.`);
      res.send({ name, email, selected, message });
    }).catch((err) => {
      console.log(`Failed to send the message "${message}" from <${name}> ${email} with the error ${err && err.message}`);
      res.send('error');
    })
})
app.listen(port, err => console.log(err || `> Ready on http://localhost:${port}`))
