const fs = require ('fs');
const path = require ('path');

const datosFilePath = path.join (__dirname, '../data/datos.json');
const datosJS = JSON.parse (fs.readFileSync (datosFilePath, 'utf-8'));


const mainController = {
    raiz:function (req,res) {
        res.render("index", {traeDatos:datosJS});
    },
    crear:function (req,res) {
        res.render("crear");
    },
    editar:function (req,res) {
        let posicionEnArray = req.params.id -1;
        res.render("editar", {traeDatos:datosJS, posicionEnArray});
    },
    editarProcess:function (req,res) {
        let idParams = req.params.id;
        /// CREA NUEVO OBJETO LITERAL CON NUEVOS DATOS
        let datoEditado = {
        id: parseInt(req.params.id),
        nombre: req.body.nombre,
        apellido: req.body.apellido
        }
        /// CREA NUEVO ARRAY CON OBJETOS LITERALES SIN EL QUE ESTAMOS EDITANDO
        let datosFiltrado = datosJS.filter(function(dato){
            return (dato.id != idParams);
        })
        /// AGREGA EL O.L MODIFICADO AL ARRAY FILTRADO
        datosFiltrado.push(datoEditado)

        /// PASAMOS JS A JSON
        let datosJSON = JSON.stringify(datosFiltrado);
        fs.writeFileSync (datosFilePath, datosJSON);
        console.log(datosJSON);
        
        res.render("index", {traeDatos:datosJS});
    
    }
}

module.exports = mainController;