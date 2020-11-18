//const nodemailer=require('nodemailer');
"use strict";
const nodemailer = require("nodemailer");
const { getMaxListeners } = require("process");

// async..await is not allowed in global scope, must use a wrapper
async function main() {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: '', //  username
      pass: '' //  password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '', // sender address
    to: '', // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>" // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

console.log("Sending!!!")
main()
.then(  e=>{  console.log("sent!")  } )
.catch( console.error );