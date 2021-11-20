const Sequelize = require('sequelize');
const sequelize = new Sequelize('world', 'root', '1407',{
    dialect:'mysql',
    host:'localhost',
    port: 3306
})

module.exports = sequelize;