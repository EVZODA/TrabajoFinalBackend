const BreakingModel = require ('../../models/usuarios.models')

const deleteUserService = async (req) => {
    const {name} = req.params;
    const response = await BreakingModel.deleteOne({name:name});
    if (response.deletedCount == 0) throw new Error (`no se encontro el usuario ${name}.`)
    return name
}

module.exports = deleteUserService