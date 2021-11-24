const Sequelize = require('sequelize')
const database = require('./db')


const LojaFuncionarios = database.define('funcionarios',{

    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allwNull:false,
        primaryKey:true
    },

    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },

    Empresa:{
        type: Sequelize.STRING,
        allowNull: false
    },

    Setor:{
        type: Sequelize.STRING,
        allowNull: false,
    }



})