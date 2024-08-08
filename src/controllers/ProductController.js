const { response } = require("express");
const ProductModel = require("../models/ProductsModel");
const jwt = require('jsonwebtoken')

const ProductController = {
    create(request, response){
        request
        ProductModel.create(request.body);
        return response.json({
            message: "produto cadastrado"
        })
      },
    async list(request, response){
        let token = request.headers.authorization? request.headers.authorization.split(' '):''
        token = token? token[1]: ''

        if(!token){
            response.json({message: "token invalido"})
        }
        else{

        let authSecret = 'Sfk802$#djhsa@Sf93s2&(3'
        let decoded = jwt.verify(token, authSecret)


        console.log(decoded)

        const products = await ProductModel.findAll({
            where:{user_id: decode.id}
        })
        response.json(products)}
      },

    async update(request, response){
        let id = request.params.id;
        ProductModel.update(request.body,{
            where:{
                id:id
            }
        })
        response.json({
            message: "produto atualizado"
        })
    },

    async delete(request, response){
        let id = request.params.id;
        ProductModel.destroy({
            where : {id}
        });
        return response.json({
            message: "Produto deletado"
        })
    }

}

module.exports = ProductController