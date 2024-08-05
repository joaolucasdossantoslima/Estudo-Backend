const { DataTypes } = require("sequelize");
const connection = require("../database/connection");



let users = connection.define("User", {
    firstname: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique : true
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
});

module.exports = users;