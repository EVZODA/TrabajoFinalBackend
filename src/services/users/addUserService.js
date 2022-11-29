const BreakingModel = require ('../../models/usuarios.models')

const addUserService = async (req) => {
    const user = req.body;
    const userBody = await BreakingModel.findOne({name: user.name})
    if (userBody) throw new Error ("El usuario ya existe")
    const newUser = new BreakingModel(user);
    await newUser.save()
    return user;
}

module.exports = addUserService;