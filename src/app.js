// INSTALAR Y REQUERIR EXPRESS
const express = require("express");     // requerir express 
const app = express();                  // guarda express en app


const methodOverride = require("method-override");

// EJS
app.set ("view engine", "ejs");         // Configurar EJS como el motor de visualización
app.set ("views", "./src/views");       // Configura carpeta de vistas

// CONFIGURAMOS LA CARPETA ESTATICA
const path = require("path");                           // requerir path
const publicPath = path.resolve(__dirname, "../public");  // guarda en variable la ruta de carpeta public
app.use(express.static(publicPath));                    // setea carpeta public como estatica


// // CONFIGURACION DE FORMULARIOS

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

// INICIAMOS EL SERVIDOR
app.listen(3000, ()=> console.log ("Server running in 3000 port ") );


// // REQUERIMOS Y UTILIZAMOS LAS RUTAS
const routerMain = require ("./routes/mainRoutes");
app.use ("/", routerMain);;



// app.use((req, res, next) => {
//     res.status(404).render('not-found');
// })