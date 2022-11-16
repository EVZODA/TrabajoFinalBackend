const BreakingModel = require ('../../models/usuarios.models')

const getUserService = async () => {
    const response = await BreakingModel.find()
    if (response !== null) {
        return response
    } else {
        res.status.json(404)({message: `no se encontro el usuario`})
    }

    
}

module.exports = getUserService