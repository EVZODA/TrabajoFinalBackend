

const MiddlewareUppercase = async (req, res, next) => {
const {name, lastName} = req.body
if (name[0].toUpperCase() === name[0] && lastName[0].toUpperCase() === lastName[0]){
    return next()
} else {
    res.status(404).json({message:`El usuario y el apellido deben comenzar con una letra mayuscula`})
}
}

const MiddlewareUppercaseParams = async (req, res, next) => {
    const {name} = req.params
    if (name[0].toUpperCase()===name[0]){
return next()
    } else {
        res.status(404).json({message:`El usuario debe comenzar con una letra mayuscula`})
    }
}

module.exports = {MiddlewareUppercase, MiddlewareUppercaseParams}