
const { Router } = require('express');

const router = Router();

// Crear un nuevo usuario
router.post( '/register', (req, res) => {
    return res.json({
        ok: true,
        msg: 'Crear usuario /register'
    })
});

// Login de usuario
router.post( '/login', (req, res) => {
    return res.json({
        ok: true,
        msg: 'Login usuario /login'
    })
});

// Revalidar token
router.get( '/renew', (req, res) => {
    return res.json({
        ok: true,
        msg: 'Renew token /renew'
    })
});

module.exports = router;