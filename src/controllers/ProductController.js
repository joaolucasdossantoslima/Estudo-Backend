const { response } = require("express");
const ProductModel = require("../models/ProductsModel");

const ProductController = {
    create(request, response){
        ProductModel.create(request.body);
        return response.json({
            message: "produto cadastrado"
        })
      },
    async list(request, response){
        const products = await ProductModel.findAll()
        response.json(products)
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