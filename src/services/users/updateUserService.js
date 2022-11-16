const BreakingModel = require ('../../models/usuarios.models')

const updateUserService = async (req) => {
    const {name} = req.params
    const user = req.body
    const updateUser = await BreakingModel.findOne({name})
    updateUser.name = user.name
    updateUser.lastName = user.lastName
    updateUser.ocupattion = user.ocupattion
    updateUser.email = user.email
    await updateUser.save()
    return updateUser.name
}

module.exports = updateUserService