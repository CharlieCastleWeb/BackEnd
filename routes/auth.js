
const { Router } = require('express');
const { check } = require('express-validator');
const { registerUser, loginUser, renewToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Crear un nuevo usuario
router.post( '/register', [
    check('name', 'Please provide a name').not().isEmpty(),
    check('email', 'Please provide a valid email').isEmail(),
    // TODO hacer validación correcta del password 
    check('password', 'Please provide a valid password')
        .isLength({min: 6})
        .isLength({max: 10})
        .matches(/^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/),
    check('organizationType', 'Please provide a valid organization Type').not().isEmpty(),
    validarCampos 
], registerUser);

// Login de usuario
router.post( '/login', [
    check('email', 'Please provide a valid email').isEmail(),
    check('password', 'Please provide a valid password')
        .isLength({min: 6})
        .isLength({max: 10})
        .matches(/^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/),
    validarCampos     
], loginUser);

// Revalidar token
router.get( '/renew', validarJWT, renewToken);

module.exports = router;