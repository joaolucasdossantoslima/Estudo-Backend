const { DataTypes } = require("sequelize");
const connection = require("../database/connection");



let categoria = connection.define("Category",{
    name:DataTypes.STRING(50)});


module.exports = categoria