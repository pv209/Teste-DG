const Sequelize = require('sequelize');

const database = process.env.DBDATABASE
const username = process.env.DBUSER
const password = process.env.DBPASS
const host = process.env.DBHOST
const dialect =  process.env.DIALECT


const connection = new Sequelize(database,username,password, {
    host,
    dialect
});

module.exports=connection;