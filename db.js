const Sequelize = require('sequelize');
const sequelize = new Sequelize('funcionarios', 'root', '1407',{
    dialect:'mysql',
    host:'localhost',
    port: 3306
}) //Nome da db, usuario, senha, db ser usada, hostname, porta

module.exports = sequelize;