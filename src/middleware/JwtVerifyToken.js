const jwt = require('jsonwebtoken')

const JwtVerifyToken = (request, response, next) => {

        let token = request.headers.authorization? request.headers.authorization.split(' '):''
            token = token? token[1]: ''

        if(!token){
         return   response.json({message: "token invalido"})
        }

        try{
            let decoded = jwt.verify(token, process.env.JWT_SECRET)
        }catch{
            response.status(403)
            return response.js0n({
                message: "Usuario não autorizado"
            })
        }
        next()
}

module.exports = JwtVerifyToken