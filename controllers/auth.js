
const { response } = require('express'); 

const registerUser = (req, res = response ) => {

    const { email, name, password, organizationType } = req.body;
    
    return res.json({
        ok: true,
        msg: 'Crear usuario /register'
    })
}

const loginUser = (req, res = response ) => {

    const { email, password } = req.body;

    return res.json({
        ok: true,
        msg: 'Login usuario /login'
    })
}

const renewToken = (req, res = response ) => {
    return res.json({
        ok: true,
        msg: 'Renew token /renew'
    })
}

module.exports = {
    registerUser,
    loginUser,
    renewToken
}
