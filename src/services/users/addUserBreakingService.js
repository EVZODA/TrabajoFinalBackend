const BreakingModel = require ('../../models/usuarios.models')
const axios = require ("axios")

const addUserBreakingService = async (req) => {
    const user = await axios.get("https://www.breakingbadapi.com/api/character/random")
    const userdata = user.data[0]
    const name = userdata.name.split(" ")
    const breakingobj = {
       name: name[0],
       lastName: name[1],
       ocupattion: userdata.occupation.toString()
    }
    const newUser = new BreakingModel(breakingobj);
    await newUser.save()
    return breakingobj;
}

module.exports = addUserBreakingService;