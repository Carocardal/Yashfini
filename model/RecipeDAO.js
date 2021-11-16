const conection = require("../DataBase/ConexionBD");

const app = require("express");

const recipeschema = conection.Schema({
    dosis: String,
    periodicidad: String,
    duracion: String
}, {
    collection: "Recipes",
    VersionKey: false
});

const recipeDAO = conection.model("Recipes", recipeschema);


module.exports = recipeDAO;