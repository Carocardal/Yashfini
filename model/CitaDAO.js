const conection = require("../DataBase/ConexionBD");

const app = require("express");

//crear el schema de la tabla a la que se va a hacer referencia
const citaschema = conection.Schema({
    doctor: String,
    paciente: String,
    consultorio: String,
    fecha: Date,
    hora_inicio: String,
    estado: String
}, {
    collection: "Citas",
    VersionKey: false
});
//Schema recibe dos parametros:1array de la estructura de la tabla de la BD, 
//2 array con el nombre de la tabla y la versionKey que es una propiedad q 
//tienen las BD que si trabajan las versiones

//crear un objeto de tipo Cita q ue conecta a la BD el DAO: DATA ACCESS OBJET
const citaDAO = conection.model("Citas", citaschema);
//el model recibe dos parametros: 1el nombre de la tabla y 
//2la estructura de ella que se encuentra en la variable que se creo antes

module.exports = citaDAO;