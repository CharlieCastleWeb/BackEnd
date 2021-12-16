
const express = require('express');

// Crear el servidor/aplicación de Express
const app = express();

// Rutas
app.use( '/auth', require( './routes/auth' ) );


// GET
app.get('/', ( req, res ) => {
    res.status(200).json({
        ok: true,
        msg: 'Todo salió bien'
    });
});







app.listen( 4000, () => {
    console.log(`Servidor corriendo en puerto ${ 4000 }`);
});
