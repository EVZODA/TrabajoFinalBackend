const BreakingModel = require ('../../models/usuarios.models')

const getUserByUsernameService = async (req, res) => {
    const {name} = req.params
    const response = await BreakingModel.findOne({name:name});
    if (response !== null){
        return response
    }
    res.status(404).json({message:'No se encontro el nombre que buscabas'})
}

module.exports = getUserByUsernameService