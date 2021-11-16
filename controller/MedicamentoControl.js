//el controlador se debe comunicar con el DAO
const medicamentoDAO = require('../model/medicamentoDAO');

//declarar un array de metodos
const medicamentosctrl = {};

//el metodo insertar recibe una medicamento y retorna el DAO para que cuando lo llame desde otro lado
medicamentosctrl.insertar = async(medicamento) => {
    return await medicamentoDAO.create(medicamento);
};

medicamentosctrl.eliminar = async(id) => {
    return await medicamentoDAO.deleteOne({ _id: id });
};

medicamentosctrl.listar = async() => {
    return await medicamentoDAO.find();
};

medicamentosctrl.actualizar = async(medicamento) => {

    return await medicamentoDAO.findByIdAndUpdate(medicamento._id, medicamento);
};

module.exports = medicamentosctrl;