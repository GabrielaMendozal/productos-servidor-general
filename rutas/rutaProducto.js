const express =require ( 'express');

const ControladorProducto = require( './../controladores/controladorProducto');

const ProductoRouter = express.Router();

ProductoRouter.post( '/crear', ControladorProducto.crearProducto);
ProductoRouter.get('/getAll', ControladorProducto.obtenerProductos);
ProductoRouter.get('/getById/:id', ControladorProducto.obtenerProductoPorId);
ProductoRouter.put('/edit/:id', ControladorProducto.actualizarProductoPorId);
ProductoRouter.delete('/eliminar/:id', ControladorProducto.eliminarProducto);

module.exports = ProductoRouter;