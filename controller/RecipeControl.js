//el controlador se debe comunicar con el DAO
const recipeDAO = require('../model/recipeDAO');

//declarar un array de metodos
const recipesctrl = {};

//el metodo insertar recibe una recipe y retorna el DAO para que cuando lo llame desde otro lado
recipesctrl.insertar = async(recipe) => {
    return await recipeDAO.create(recipe);
};

//el metodo eliminar recibe un objeto tipo Json y en la BD es _id
recipesctrl.eliminar = async(id) => {
    return await recipeDAO.deleteOne({ _id: id });
};

//el metodo listar normalmente se escribe primero que los demas
recipesctrl.listar = async() => {
    return await recipeDAO.find();
};

//metodo actualizar o modificar
//findByIdAndUpdate el primer parametro es el id, el segundo lo que se va a actualizar
recipesctrl.actualizar = async(recipe) => {

    return await recipeDAO.findByIdAndUpdate(recipe._id, recipe);
};

module.exports = recipesctrl;