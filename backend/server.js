const express = require('express');
const app = express();
const handlers = require('./lib/handlers');
const PORT = 8080;

//rotas
app.get('/PasswordConfimation', handlers.passConfirm);

app.listen(8080, () => {
    console.log(`servidor aberto na porta ${PORT}`)
})

