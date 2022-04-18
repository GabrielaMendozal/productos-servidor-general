const { request } = require('express');
const cors = require( 'cors');
const express = require( 'express');
const res = require('express/lib/response');

require( './config/config');

const app = express(); //funcion devuelve objetos con propiedades
console.log(app);

const ProductoRouter = require( './rutas/rutaProducto');

app.use( cors());
app.use( express.json());
app.use('/api/producto', ProductoRouter)


app.listen( 8080, () => {
    console.log( 'El servidor se encuentra corriendo en el puerto 8080')
});