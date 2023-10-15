const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'Gmail',
    port: ,
    secure: false,
    auth: {
        user: 'leticiamaiaaa.2002@gmail.com',
        pass: 'filipe2004',
        
    }
});