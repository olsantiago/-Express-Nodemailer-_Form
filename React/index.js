const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) =>{
    nodemailer.createTestAccount((err, account) =>{
        const htmlEmail=`
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
        `

        let transporter = nodemailer.createTransport({
            host: 'smtp.sendgrid.net',
            port: 587,
            auth:{
                user: 'apikey',
                pass: ' '
                /* if you are using send grid just plug in your api key in 'pass' */ 
                /* you can ealso edit this if you have your own server or other third party email server */
            }
        })

        let mailOptions = {
            from: 'website@osantiago.com',
            to:'osantiago1005@gmail.com',
            replyTo: 'osantiago1005@gmail.com',
            subject: 'Reaching Out',
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if(err) {
                return console.log(err)
            }
            console.log('Message sent: %s', info.message)
            console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
        })
    })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`)
})