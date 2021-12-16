
const { response } = require('express'); 
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const registerUser = async ( req, res = response ) => {

    const { email, name, password, organizationType } = req.body;

    try {
        // Verificar que el email es único
        const usuario = await Usuario.findOne({ email });

        if ( usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'User with this email already exists'
            });
        }

        // Crear usuario con el modelo
        const dbUser = new Usuario( req.body );

        // Hashear la contraseña
        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync( password, salt );

        // Generar JWT
        const token = await generarJWT( dbUser.id, name );
        // Crear usuario de DB
        await dbUser.save();

        // Generar respuesta exitosa
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name,
            email,
            organizationType,
            token
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Wrong Credentials'
        })
    }


    
    
    
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
