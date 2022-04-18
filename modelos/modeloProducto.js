const mongoose = require( 'mongoose');

const SchemaProducto = mongoose.Schema({
    title :  {
        type : String,
        required : [true, "title is required"],
        minlength : [5, "title must be at least 5 characteres long"]
    },
    price : {
        type : Number,
        required : [true, "price is required"],
    },
    description : {
        type : String,
        required : [true, "title is required"],
        minlength : [5, "title must be at least 5 characteres long"]
    }
});

const Producto = mongoose.model('productos', SchemaProducto);

module.exports = Producto;