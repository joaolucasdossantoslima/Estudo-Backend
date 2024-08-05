const UserModel = require('../models/UserModel')

const UserController = {
    create(request, response) {
        UserModel.create(request.body);

        return response.json({
            message: "Usuario cirado com sucesso!"
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