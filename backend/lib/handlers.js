const express = require('express');
const User_Data = require('../database/data')

exports.SendEmail = (req,res) => {
    const mailSend = {
        from: 'leticiamaia2002@gmail.com',
        //to: getfromdatabase,
        //subject: assunto do email,
        /*html: `
    <div style="background-color: #f0f0f0; padding: 20px; border-radius: 10px;">
      <h2>Meu Card</h2>
      <p>Este é o conteúdo do meu card.</p>
      <a href="https://www.exemplo.com" style="text-decoration: none; color: #007BFF;">Clique aqui para saber mais</a>
    </div>
  `,
*/

    }
}

exports.SaveUserData = (req,res) => {
    User_Data.create({
        email: //puxar da lista de emails,
        password: //puxar do usuario
    }).then(() =>{
        res.redirect() // redirecionar para o site desejado do cliente
    })
}