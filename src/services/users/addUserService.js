const BreakingModel = require ('../../models/usuarios.models')

const addUserService = async (req) => {
    const user = req.body;
    const newUser = new BreakingModel(user);
    await newUser.save()
    return user;
}

module.exports = addUserService;