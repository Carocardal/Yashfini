const mongoose = require("mongoose"); //aqui se importa la libreria de mongoose para conectar con la BD

const urt = "mongodb+srv://CaroCardales:3stS4r4@carocardales.r8lsr.mongodb.net/Yashfini?retryWrites=true&w=majority";

//mongoose es el nombre que le asignamos arbitrariamente
//conect recibe dos parametros: 1direccin, 2la config de yo la haga a la bd
mongoose.connect(urt).then(() => console.log("Conectado a la Base de Datos"))
    .catch((msjerror) => console.log("Fallo la coneccion con la base de datos: " + msjerror));


module.exports = mongoose;