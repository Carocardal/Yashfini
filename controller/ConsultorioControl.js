//el controlador se debe comunicar con el DAO
const consultorioDAO = require('../model/consultorioDAO');

//declarar un array de metodos
const consultoriosctrl = {};

//el metodo insertar recibe una consultorio y retorna el DAO para que cuando lo llame desde otro lado
consultoriosctrl.insertar = async(consultorio) => {
    return await consultorioDAO.create(consultorio);
};

//el metodo eliminar recibe un objeto tipo Json y en la BD es _id
consultoriosctrl.eliminar = async(id) => {
    return await consultorioDAO.deleteOne({ _id: id });
};

//el metodo listar normalmente se escribe primero que los demas
consultoriosctrl.listar = async() => {
    return await citaDAO.find();
};

//metodo actualizar o modificar
//findByIdAndUpdate el primer parametro es el id, el segundo lo que se va a actualizar
consultoriosctrl.actualizar = async(consultorio) => {

    return await consultorioDAO.findByIdAndUpdate(consultorio._id, consultorioDAO);
};

module.exports = consultoriosctrl;