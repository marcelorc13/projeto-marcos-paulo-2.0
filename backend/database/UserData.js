const Sequelize = require('sequelize');
const connection = require('./database');

const user_data = connection.define('People_Data', {
    email:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    password:{
        type: Sequelize.STRING,
    }
});

user_data.sync({force: false}).then( () => {console.log("Tabela criada")}) // force false
module.exports = user_data;