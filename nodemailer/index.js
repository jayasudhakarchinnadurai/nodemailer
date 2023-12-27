const express = require("express")
const app = express();

const port =8000


const nodemailer = require('nodemailer');

const senderMail = "sivanathanpofitech@gmail.com";

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: senderMail,
      pass: 'eloetnigsvwlqjyt'
    }
  });
  




app.get("/email",async(req,res)=>{
    
      const mailOptions = {
        from: senderMail,
        to: 'therisudhakar1718@gmail.com', 
        subject: 'Sending SMS via Nodemailer',
        text: 'Hello, this is a test message sent via Nodemailer!'
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          res.status(500).send({
            message:error
          });
        } else {
         res.status(200).send({
            message:"email send successuflly",
           data:info.response 
         });
        }
      });

})

app.listen(port, ()=>console.log(`your app start ${port}`))