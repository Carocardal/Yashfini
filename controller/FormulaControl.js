//el controlador se debe comunicar con el DAO
const formulaDAO = require('../model/FormulaDAO');

//declarar un array de metodos
const formulasctrl = {};

//el metodo insertar recibe un formula y retorna el DAO para que cuando lo llame desde otro lado
formulasctrl.insertar = async(formula) => {
    return await formulaDAO.create(formula);
};

//el metodo eliminar recibe un objeto tipo Json y en la BD es _id
formulasctrl.eliminar = async(id) => {
    return await formulaDAO.deleteOne({ _id: id });
};

//el metodo listar normalmente se escribe primero que los demas
formulasctrl.listar = async() => {
    return await formulaDAO.find();
};

//metodo actualizar o modificar
//findByIdAndUpdate el primer parametro es el id, el segundo lo que se va a actualizar
formulasctrl.actualizar = async(formula) => {

    return await formulaDAO.findByIdAndUpdate(formula._id, formula);
};

module.exports = formulasctrl;