
const { Router } = require('express');
const { registerUser, loginUser, renewToken } = require('../controllers/auth');

const router = Router();

// Crear un nuevo usuario
router.post( '/register', registerUser);

// Login de usuario
router.post( '/login', loginUser);

// Revalidar token
router.get( '/renew', renewToken);

module.exports = router;