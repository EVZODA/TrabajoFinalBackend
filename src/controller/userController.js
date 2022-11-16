const addUserService = require ("../services/users/addUserService")
const addUserBreakingService = require ('../services/users/addUserBreakingService')
const deleteUserService = require ("../services/users/deleteUserService")
const getUserByUsernameService = require ("../services/users/getUserByUsernameService")
const getUserService = require ("../services/users/getUserService")
const updateUserService = require ("../services/users/updateUserService")

const addUserController = async (req, res) => {
    try {
        const addUser = await addUserService(req)
        res.status(201).json({message: `creado el personaje de ${addUser.name}`})
    } catch (error) {
        console.log(error);
        res.json({message: error.message});
    }
}

const addUserBreakingController = async (req, res) => {
    try {
        const addUser = await addUserBreakingService(req)
        res.status(201).json({message: `creado el personaje de ${addUser.name}`})
    } catch (error) {
        console.log(error);
        res.json({message: error.message});
    }
}

const deleteUserController = async (req, res) => {
    try {
        const delUser = await deleteUserService(req);
        res.json({message: `usuario ${delUser} eliminado con exito`})
    } catch (error) {
        console.log(error);
        res.json({message: error.message});
    }
}

const getUserByUsernameController = async (req, res) => {
    try {
        const users = await getUserByUsernameService(req, res)
        res.json(users)
    } catch (error) {
        console.log(error);
        res.json({message: error.message});
    }
}

const getUserController = async (req, res) => {
    try {
        const users = await getUserService()
        res.json(users)
    } catch (error) {
        console.log(error);
        res.json({message:error.message});
    }
}

const updateUserController = async (req, res) => {
    try {
        const updateUser = await updateUserService(req)
        res.status(200).json({message: `modificado el usuario ${updateUser}`})
    } catch (error) {
        console.log(error);
        res.json({message: error.message});
        
    }
}

module.exports = {getUserByUsernameController, addUserController, deleteUserController, getUserController, updateUserController, addUserBreakingController}