
const { response } = require('express'); 

const registerUser = (req, res) => {
    return res.json({
        ok: true,
        msg: 'Crear usuario /register'
    })
}

const loginUser = (req, res) => {
    return res.json({
        ok: true,
        msg: 'Login usuario /login'
    })
}

const renewToken = (req, res) => {
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
