const dotenv = require("dotenv")
dotenv.config();

const express = require('express')
const app = express();


app.use(express.json());

const UserController = require('./controllers/UserController')
const ProductController = require('./controllers/ProductController')
const UserCreateValidation = require('./middleware/UserCreateValidation')
const JwtVerifyToken = require('./middleware/JwtVerifyToken')

const PrivatesRoutes = express.Router();

PrivatesRoutes.use(JwtVerifyToken);

app.get('/products', ProductController.list)

app.get('/users', UserController.list )

.post('/users', UserController.create)

app.post('/login', UserController.login)

PrivatesRoutes.post('/products', ProductController.create)

app.put('/users/:id', UserController.update)

PrivatesRoutes.put('/products/:id', ProductController.update)

app.put('/products/:id', UserController.delete)

PrivatesRoutes.put('/products/:id', ProductController.delete)

app.use(PrivatesRoutes)

app.listen(3000);































// const { QueryTypes, DataTypes } = require('sequelize');
// const connection = require('./database/connection')



// async function execute(){

// const resultado = await connection.query("DESCRIBE produtos", {
//     type: QueryTypes.DESCRIBE
// });

// const produtos = await connection.query("SELECT * FROM produtos", {
//     type: QueryTypes.SELECT
// });

// console.log(produtos)
// }
// execute()

// const ProductController = require("./controllers/ProductController");
// // const UserController = require("./controllers/UserController")

// const request = {
//     body:{
//        name: "celular",
//        description: "seminovo",
//        price: 300.00,
//        price_with_discount:230.00,
//        enable:1,
//        stock: 15,
//     }
// }

// // ProductController.create(request)
// ProductController.list()
// // UserController.create(request);
// UserController.list()


