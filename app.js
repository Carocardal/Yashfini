const { request, response } = require("express");
const express = require("express");

const usuarioscrtl = require('./controller/UsuarioControl');
const citascrtl = require('./controller/CitaControl');
const formulascrtl = require('./controller/FormulaControl');
const consultorioscrtl = require('./controller/ConsultorioControl');
const medicamentoscrtl = require('./controller/MedicamentoControl');
const recipesctrl = require('./controller/RecipeControl');

const app = express();
app.use(express.json());


app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

/************************************INICIO USUARIOS ******************************************************/

//el metodo get se encarga de llamar al listar del ctrl
//get envia el response(respuesta) con una lista o una tabla de todos los usuarios registrados
app.get('/api/usuarios', async(request, response) => {
    const usuarios = await usuarioscrtl.listar();
    try {
        await usuarioscrtl.listar();
        response.status(200).json(usuarios);
    } catch (error) {
        console.log("Hubo un error al listar la tabla: " + error);
        response.status(400).send("Hubo un error al listar la tabla: " + error);
    }

});

//este metodo post es el que se usa para insertar informacion a la BD, 
//recibe como primer parametro la ruta que yo le creo
app.post('/api/usuarios', async(request, response) => {
    const usuar = request.body;

    try {
        await usuarioscrtl.insertar(usuar); //este es el que se va a encargar de insertar, el await es para que espere mientrar se abre
        console.log("Usuario registrado exitosamente");
        //response.status(201).json(usuar);
        response.status(201).send("Usuario registrado exitosamente.");
    } catch (error) {
        console.log("Hubo un error al insertar el usuario: " + error);
        response.status(400).send("Hubo un error al insertar el usuario: " + error);
    }
}); //este es un metodo asincrono async(request, response)... es el segundo parametro del metodo post


app.put('/api/usuarios', async(request, response) => {
    const usuar = request.body;

    try {
        await usuarioscrtl.actualizar(usuar); //este es el que se va a encargar de insertar, el await es para que espere mientrar se abre
        console.log("Usuario actualizado exitosamente");
        response.status(200).send("Usuario actualizado exitosamente.");
    } catch (error) {
        console.log("Hubo un error al insertar el usuario: " + error);
        response.status(400).send("Hubo un error al insertar el usuario: " + error);
    }
});

//el metodo delete recibe la ruta del id como primer parametro
app.delete('/api/usuarios/:id', async(request, response) => {
    const id = request.params.id;
    try {
        await usuarioscrtl.eliminar(id);
        console.log("Registro eliminado exitosamente");
        response.status(200).send("Registro eliminado exitosamente.");
    } catch (error) {
        console.log("Hubo un error al eliminar: " + error);
        response.status(400).send("Hubo un error al eliminar: " + error);
    }
});

/************************************FIN USUARIOS ******************************************************/

/************************************INICIO CITAS ***************************************************/
app.get('/api/citas', async(request, response) => {
    const cita = await citascrtl.listar();
    try {
        await citascrtl.listar();
        response.status(200).json(cita);
    } catch (error) {
        console.log("Hubo un error al listar la tabla: " + error);
        response.status(400).send("Hubo un error al listar la tabla: " + error);
    }
});
app.post('/api/citas', async(request, response) => {
    const cita = request.body;
    try {
        await citascrtl.insertar(cita); //este es el que se va a encargar de insertar, el await es para que espere mientrar se abre
        console.log("cita registrado exitosamente");
        //response.status(201).json(cita);
        response.status(201).send("cita registrada exitosamente.");
    } catch (error) {
        console.log("Hubo un error al insertar la cita: " + error);
        response.status(400).send("Hubo un error al insertar la cita: " + error);
    }
});
app.delete('/api/citas/:id', async(request, response) => {
    const id = request.params.id;
    try {
        await citascrtl.eliminar(id);
        console.log("Registro eliminado exitosamente");
        response.status(200).send("Registro eliminado exitosamente.");
    } catch (error) {
        console.log("Hubo un error al eliminar: " + error);
        response.status(400).send("Hubo un error al eliminar: " + error);
    }
});
app.put('/api/citas', async(request, response) => {
    const cita = request.body;
    try {
        await citascrtl.actualizar(cita); //este es el que se va a encargar de insertar, el await es para que espere mientrar se abre
        console.log("cita actualizada exitosamente");
        response.status(200).send("cita actualizada exitosamente.");
    } catch (error) {
        console.log("Hubo un error actualizando la cita: " + error);
        response.status(400).send("Hubo un erroractualizando la cita: " + error);
    }
});
/************************************FIN CITAS ***************************************************/

/************************************INICIO FORMULAS ***************************************************/
app.get('/api/formulas', async(request, response) => {
    const formula = await formulascrtl.listar();
    try {
        await formulascrtl.listar();
        response.status(200).json(formula);
    } catch (error) {
        console.log("Hubo un error al listar la tabla: " + error);
        response.status(400).send("Hubo un error al listar la tabla: " + error);
    }

});

app.post('/api/formulas', async(request, response) => {
    const formula = request.body;

    try {
        await formulascrtl.insertar(formula); //este es el que se va a encargar de insertar, el await es para que espere mientrar se abre
        console.log("formula registrado exitosamente");
        //response.status(201).json(formula);
        response.status(201).send("formula registrada exitosamente.");
    } catch (error) {
        console.log("Hubo un error al insertar la formula: " + error);
        response.status(400).send("Hubo un error al insertar la formula: " + error);
    }
});

app.delete('/api/formulas/:id', async(request, response) => {
    const id = request.params.id;
    try {
        await formulascrtl.eliminar(id);
        console.log("Registro eliminado exitosamente");
        response.status(200).send("Registro eliminado exitosamente.");
    } catch (error) {
        console.log("Hubo un error al eliminar: " + error);
        response.status(400).send("Hubo un error al eliminar: " + error);
    }
});

app.put('/api/formulas', async(request, response) => {
    const formula = request.body;

    try {
        await formulascrtl.actualizar(formula); //este es el que se va a encargar de insertar, el await es para que espere mientrar se abre
        console.log("formula actualizada exitosamente");
        response.status(200).send("formula actualizada exitosamente.");
    } catch (error) {
        console.log("Hubo un error actualizando la formula: " + error);
        response.status(400).send("Hubo un erroractualizando la formula: " + error);
    }
});
/************************************FIN FORMULAS ***************************************************/
/************************************INICIO CONSULTORIO ***************************************************/
app.get('/api/consultorios', async(request, response) => {
    const consultorio = await consultorioscrtl.listar();
    try {
        await consultorioscrtl.listar();
        response.status(200).json(consultorio);
    } catch (error) {
        console.log("Hubo un error al listar: " + error);
        response.status(400).send("Hubo un error al listar: " + error);
    }

});

app.post('/api/consultorios', async(request, response) => {
    const consultorio = request.body;

    try {
        await consultorioscrtl.insertar(consultorio); //este es el que se va a encargar de insertar, el await es para que espere mientrar se abre
        console.log("consultorio registrado exitosamente");
        response.status(201).send("consultorio registrada exitosamente.");
    } catch (error) {
        console.log("Hubo un error al insertar la consultorio: " + error);
        response.status(400).send("Hubo un error al insertar la consultorio: " + error);
    }
});

app.delete('/api/consultorios/:id', async(request, response) => {
    const id = request.params.id;
    try {
        await consultorioscrtl.eliminar(id);
        console.log("Registro eliminado exitosamente");
        response.status(200).send("Registro eliminado exitosamente.");
    } catch (error) {
        console.log("Hubo un error al eliminar: " + error);
        response.status(400).send("Hubo un error al eliminar: " + error);
    }
});

app.put('/api/consultorios', async(request, response) => {
    const consultorio = request.body;

    try {
        await consultorioscrtl.actualizar(consultorio); //este es el que se va a encargar de insertar, el await es para que espere mientrar se abre
        console.log("consultorio actualizado exitosamente");
        response.status(200).send("consultorio actualizado exitosamente.");
    } catch (error) {
        console.log("Hubo un error actualizando el consultorio: " + error);
        response.status(400).send("Hubo un error actualizando el consultorio: " + error);
    }
});
/************************************FIN CONSULTORIOS ***************************************************/
/************************************INICIO MEDICAMENTOS ***************************************************/
app.get('/api/medicamentos', async(request, response) => {
    const medicamento = await medicamentoscrtl.listar();
    try {
        await medicamentoscrtl.listar();
        response.status(200).json(medicamento);
    } catch (error) {
        console.log("Hubo un error al listar: " + error);
        response.status(400).send("Hubo un error al listar: " + error);
    }

});

app.post('/api/medicamentos', async(request, response) => {
    const medicamento = request.body;

    try {
        await medicamentoscrtl.insertar(medicamento); //este es el que se va a encargar de insertar, el await es para que espere mientrar se abre
        console.log("medicamento registrado exitosamente");
        response.status(201).send("medicamento registrada exitosamente.");
    } catch (error) {
        console.log("Hubo un error al insertar el medicamento: " + error);
        response.status(400).send("Hubo un error al insertar el medicamento: " + error);
    }
});

app.delete('/api/medicamentos/:id', async(request, response) => {
    const id = request.params.id;
    try {
        await medicamentoscrtl.eliminar(id);
        console.log("Registro eliminado exitosamente");
        response.status(200).send("Registro eliminado exitosamente.");
    } catch (error) {
        console.log("Hubo un error al eliminar: " + error);
        response.status(400).send("Hubo un error al eliminar: " + error);
    }
});

app.put('/api/consultorios', async(request, response) => {
    const consultorio = request.body;

    try {
        await consultorioscrtl.actualizar(consultorio); //este es el que se va a encargar de insertar, el await es para que espere mientrar se abre
        console.log("consultorio actualizado exitosamente");
        response.status(200).send("consultorio actualizado exitosamente.");
    } catch (error) {
        console.log("Hubo un error actualizando el consultorio: " + error);
        response.status(400).send("Hubo un error actualizando el consultorio: " + error);
    }
});
/************************************FIN MEDICAMENTO ***************************************************/
/************************************INICIO RECIPES ***************************************************/
app.get('/api/recipes', async(request, response) => {
    const recipe = await recipesctrl.listar();
    try {
        await recipesctrl.listar();
        response.status(200).json(recipe);
    } catch (error) {
        console.log("Hubo un error al listar la tabla: " + error);
        response.status(400).send("Hubo un error al listar la tabla: " + error);
    }
});
app.post('/api/recipes', async(request, response) => {
    const recipe = request.body;
    try {
        await recipesctrl.insertar(recipe); //este es el que se va a encargar de insertar, el await es para que espere mientrar se abre
        console.log("recipe registrado exitosamente");
        //response.status(201).json(recipe);
        response.status(201).send("recipe registrado exitosamente.");
    } catch (error) {
        console.log("Hubo un error al insertar el recipe: " + error);
        response.status(400).send("Hubo un error al insertar el recipe: " + error);
    }
});
app.delete('/api/recipes/:id', async(request, response) => {
    const id = request.params.id;
    try {
        await recipesctrl.eliminar(id);
        console.log("Registro eliminado exitosamente");
        response.status(200).send("Registro eliminado exitosamente.");
    } catch (error) {
        console.log("Hubo un error al eliminar: " + error);
        response.status(400).send("Hubo un error al eliminar: " + error);
    }
});
app.put('/api/recipes', async(request, response) => {
    const recipe = request.body;
    try {
        await recipesctrl.actualizar(recipe); //este es el que se va a encargar de insertar, el await es para que espere mientrar se abre
        console.log("recipe actualizado exitosamente");
        response.status(200).send("recipe actualizado exitosamente.");
    } catch (error) {
        console.log("Hubo un error actualizando la recipe: " + error);
        response.status(400).send("Hubo un erroractualizando la recipe: " + error);
    }
});
/************************************FIN RECIPES ***************************************************/

app.listen(1800, () => {
    console.log("servidor escuchando");
});