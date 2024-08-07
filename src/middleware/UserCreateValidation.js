const UserModel = require('../models/UserModel')


 const UserCreateValidation = async (request, response, next) =>{
    


    if(!request.body.firstname || !request.body.surname || !request.body.email || !request.body.password){
        return response.status(400).json({
        message: 'todos os campos são obrigatorios'
                    })
    }

    const email = request.body.email
    const emailReq = await UserModel.findOne({
        where: { email }
    });
    
     if (emailReq && emailReq.dataValues.id >0){
        return response.status(409).json({
            message: 'email ja esta cadastrado'
                        })
    }
    next()
}

module.exports = UserCreateValidation;