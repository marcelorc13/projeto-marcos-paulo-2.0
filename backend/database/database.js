const Sequelize = require('sequelize')
const connection = new Sequelize('perguntas', 'root', '***senha marcelo***', {
    host:'localhost',
    dialect:'mysql',
    logging: false
});

module.exports = connection;