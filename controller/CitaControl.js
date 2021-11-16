//el controlador se debe comunicar con el DAO
const citaDAO = require('../model/CitaDAO');

//declarar un array de metodos
const citasctrl = {};

//el metodo insertar recibe una cita y retorna el DAO para que cuando lo llame desde otro lado
citasctrl.insertar = async(cita) => {
    return await citaDAO.create(cita);
};

//el metodo eliminar recibe un objeto tipo Json y en la BD es _id
citasctrl.eliminar = async(id) => {
    return await citaDAO.deleteOne({ _id: id });
};

//el metodo listar normalmente se escribe primero que los demas
citasctrl.listar = async() => {
    return await citaDAO.find();
};

//metodo actualizar o modificar
//findByIdAndUpdate el primer parametro es el id, el segundo lo que se va a actualizar
citasctrl.actualizar = async(cita) => {

    return await citaDAO.findByIdAndUpdate(cita._id, cita);
};

module.exports = citasctrl;