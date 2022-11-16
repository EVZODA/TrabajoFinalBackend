const express = require ("express");

const {validateCreate} = require ('../utils.js/validator')

const {MiddlewareUppercase, MiddlewareUppercaseParams} = require ('../utils.js/findMiddleware')

const {
    addUserController,
    getUserByUsernameController,
    getUserController,
    updateUserController,
    deleteUserController,
    addUserBreakingController,
} = require ('../controller/userController');

const router = express.Router();

//const validator = require ('../utils.js/validator')

//const {body} = require ("express-validator")

router.get("/user", getUserController);
router.get("/user/:name", MiddlewareUppercaseParams, getUserByUsernameController)
router.put("/user/:name", MiddlewareUppercase, validateCreate,
// [body('name', 'Ingrese un nombre con un minimo de 3 caracteres')
// .exists()
// .isLength({min:3}),

// body('lastName', 'Ingrese un apellido con un minimo de 3 caracteres')
// .exists()
// .isLength({min:3}),

// body ('ocupattion', 'Ingrese su ocupacion')
// .isEmpty()
// .exists()
// .isLength({min:1}),


// body ('email', 'Ingrese un email correcto')
// .exists()
// .isEmail()
// ],validator,
updateUserController)
router.post("/user",MiddlewareUppercase, validateCreate,
// [body('name', 'Ingrese un nombre con un minimo de 3 caracteres')
// .exists()
// .isLength({min:3}),

// body('lastName', 'Ingrese un apellido con un minimo de 3 caracteres')
// .exists()
// .isLength({min:3}),

// body ('ocupattion', 'Ingrese su ocupacion')
// .exists(),

// body ('email', 'Ingrese un email correcto')
// .exists()
// .isEmail()
// ],validator,
addUserController)
router.post("/user/Breaking", addUserBreakingController)
router.delete("/user/:name",
deleteUserController)



module.exports = router