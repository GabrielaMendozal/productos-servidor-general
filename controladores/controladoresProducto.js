const { request } = require('express');
const Producto = require( './../modelos/modeloProducto');

const crearProducto = (request, response) => {
    const {title, price,description} = request.body;

    if(title && price || description){
        nuevoProducto={
            title,price,description
        };
        Producto.create( nuevoProducto)
            .then( productoCreado => {
                return response.status( 201).json(productoCreado)
            })
            .catch( err => {
                response.statusMessage = "Hubo un error al ejecutar el crearProducto." + err;
                return response.status( 400).end()
            })
    }
    else{
        response.statusMessage = 'Se necesita proporcionar title, price y description'
        return response.status( 406).end();
    }
}

const obtenerProductos = (request, response) =>{
    Producto.find()
        .then( listaProductos =>{
            return response.status( 200).json(listaProductos);
        })
        .catch( err => {
            response.statusMessage = "Hubo un error al ejecutar el obtener productos." + err;
            return response.status( 400).end()
        });
}

const obtenerProductoPorId = (request,response) => {
    
    Producto.findOne({_id:request.params.id})
        .then( productoEncontrado => {
            return response.status( 200).json(productoEncontrado);
        })
        .catch( err => {
            response.statusMessage = "Hubo un error al ejecutar obtenerProductoPorId." + err;
            return response.status( 400).end()
        });
}

const actualizarProductoPorId = (request,response) => {
    const{title,price,description} = request.body;
    const productoActualizado ={
        title,price,description
    }
    Producto.findOneAndUpdate({_id: request.params.id}, { $set : productoActualizado}, {new:true})
    .then( (updatedProducto) => {
        return response.status(202).json(updatedProducto);
    })
    .catch(err => {
        response.statusMessage = "Hubo un error al ejecutar el update." + err;
        return response.status( 400).end()
    })

} 
/*ruta para eliminar*/

const eliminarProducto = (request, response) => {
    Producto.deleteOne({ _id: request.params.id })
        .then(() => {
            return response.status( 204).end();
        })
        .catch(err => {
            response.statusMessage ="Hubo un error al eliminar" + err;
            return response.status( 400).end();
        });
}



const ControladorProducto ={
    crearProducto,
    obtenerProductos,
    obtenerProductoPorId,
    actualizarProductoPorId,
    eliminarProducto
    
}

module.exports = ControladorProducto;