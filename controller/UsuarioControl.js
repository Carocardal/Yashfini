//el controlador se debe comunicar con el DAO
const usuarDAO = require('../model/UsuarioDAO');

//declarar un array de metodos
const usuariosctrl = {};

//el metodo insertar recibe un usuario y retorna el DAO para que cuando lo llame desde otro lado
usuariosctrl.insertar = async(usuario) => {
    return await usuarDAO.create(usuario);
};

//el metodo eliminar recibe un objeto tipo Json y en la BD es _id
usuariosctrl.eliminar = async(id) => {
    return await usuarDAO.deleteOne({ _id: id });
};

//el metodo listar normalmente se escribe primero que los demas
usuariosctrl.listar = async() => {
    return await usuarDAO.find();
};

//metodo actualizar o modificar
//findByIdAndUpdate el primer parametro es el id, el segundo lo que se va a actualizar
usuariosctrl.actualizar = async(usuario) => {
    let id = usuario._id; //declaro la variable id y la traigo del arreglo usuario, al mismo tiempo
    delete usuario._id; //se tiene que borrar el id del arreglo para poder enviarlo porq la bd ya lo crea auto...
    return await usuarDAO.findByIdAndUpdate(id, usuario);
};

module.exports = usuariosctrl;