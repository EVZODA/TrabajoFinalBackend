//const {validationResult } = require('express-validator');

//const validator = (req, res) => {
//const errors = validationResult(req)
//if (!errors.isEmpty()) {
// return res.status(400).json({ errors: errors.array() });
//}
//}
//module.exports = validator

const { body } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper");

const validateCreate = [
  body("name", "Ingrese un nombre")
    .exists()
    .notEmpty(),

 body("lastName", "Ingrese un apellido")
    .exists()
    .notEmpty(),

  body("ocupattion", "Ingrese su ocupacion")
  .notEmpty()
  .exists()
  .isLength({ min: 2 }),

  body("email", "Ingrese un email correcto")
  .exists()
  .isEmail(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateCreate };
