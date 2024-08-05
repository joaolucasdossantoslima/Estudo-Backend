const UserModel = require('../models/UserModel')
const UserController = {
    async create(request, response) {
        let messageReturn = ''

        const email = request.body.email
        const emailReq = await UserModel.findOne({
            where: { email }
        });

        if(!request.body.firstname || !request.body.surname || !request.body.email || !request.body.password){
            messageReturn = 'todos os campos são obrigatorios'
        }
        else if (emailReq && emailReq.dataValues.id >0){
            messageReturn ='Email ja cadastrado'
        }
        else{

        UserModel.create(request.body);
        messageReturn = 'Usuario criado com sucesso'
        }

        return response.json({
            message: messageReturn
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