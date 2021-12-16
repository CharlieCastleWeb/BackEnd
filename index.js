
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');
require('dotenv').config();

// Crear el servidor/aplicación de Express
const app = express();

// Base de datos
dbConnection();

// Directorio Público
app.use( express.static('public'));

// CORS
app.use( cors() );

// Lectura y parseo del body
app.use( express.json() );

// Rutas
app.use( '/auth', require( './routes/auth' ) );


// GET
app.get('/', ( req, res ) => {
    res.status(200).json({
        ok: true,
        msg: 'Todo salió bien'
    });
});







app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});
