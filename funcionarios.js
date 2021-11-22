const Sequelize = require('sequelize');
const database = require('./db');
//puxando o arquivo banco

const nomes = database.define('Lista',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    
    nome:{
        type: Sequelize.STRING,
        allowNull:false
    },
    sobrenome:{
        type:Sequelize.STRING,
        allowNull:false
    },

    setorTrabalho:{
        type: Sequelize.STRING,
        allowNull:false
    },
    NumeroId:{
        type: Sequelize.INTEGER,
        allowNull:true,

    }
})

module.exports = nomes;
