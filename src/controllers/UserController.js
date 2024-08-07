const { noTrueLogging } = require('sequelize/lib/utils/deprecations');
const ProductModel = require('../models/ProductsModel');
const UserModel = require('../models/UserModel')
const bcrypt = require("bcrypt")

const UserController = {
    async create(request, response) {


        let hash = await bcrypt.hash(require.body.password, 10);
        request.body.password = hash

       

        UserModel.create(request.body);
        return response.status(201).json({
            message: 'usuario criado com sucesso'
                        })

    },

    async login(request,response){
        let = email = request.body.email
        let = password = request.body.password

        let user = UserModel.findOne({
            where: { email }
        });
        let hasValid = await bcrypt.compare(password, user.password)

        response.json({
            message: hasValid
        })
    },

    async list(request,response){
        const users = await UserModel.findAll()
        response.json(users)
    },
    async update(request,response){
        let id = request.params.id;
        UserModel.update(request.body,{
            where:{
                id:id
            }
        })
        response.json({
            message:"Usuario atualizado"
        })
    },
    
    async delete(request, response){
        let id = request.params.id;
        UserModel.destroy({
            where : {id}
        });
        return response.json({
            message: "Usuario deletado com sucesso"
        })
    }
}
module.exports = UserController;