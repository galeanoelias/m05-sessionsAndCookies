const { check } = require('express-validator')

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('El campo nombre es obligatorio').bail()
    .isLength({ min: 4, max: 50 })
    .withMessage('El nombre tiene que tener entre 4 y 50 caracteres')
    .isAlphanumeric()
    .withMessage('Ingresa un nombre válido'),
    
    check('email')
    .notEmpty()
    .withMessage('Debe ingresar un email'),

    check('edad')
    .isNumeric()
    .withMessage('Debe ingresar una edad'),
]