const conection = require("../DataBase/ConexionBD");

const app = require("express");

//crear el schema de la tabla a la que se va a hacer referencia
const usuarioschema = conection.Schema({
    nombres: String,
    apellidos: String,
    correo: String,
    direccion: String,
    tipodoc: String,
    documento: String,
    genero: String,
    password: String,
    correo_verificado: String,
    num_telefono: String,
    fecha_nacimiento: Date,
    rol_usuario: String,
    recordarme: String,
    especialidad: String
}, {
    collection: "Usuarios",
    VersionKey: false
});
//Schema recibe dos parametros:1array de la estructura de la tabla de la BD, 
//2 array con el nombre de la tabla y la versionKey que es una propiedad q 
//tienen las BD que si trabajan las versiones

//crear un objeto de tipo Usuario q ue conecta a la BD el DAO: DATA ACCESS OBJET
const usuarioDAO = conection.model("Usuarios", usuarioschema);
//el model recibe dos parametros: 1el nombre de la tabla y 
//2la estructura de ella que se encuentra en la variable que se creo antes(usuarioschema)

module.exports = usuarioDAO;