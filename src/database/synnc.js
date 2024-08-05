const categoria = require("../models/CategoriaModel");
const ProductModel = require("../models/ProductsModel");
const users = require("../models/UserModel");
const connection = require("./connection");

connection.sync({force: true})