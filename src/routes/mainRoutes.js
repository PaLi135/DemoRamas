const express = require ("express");
const router = express.Router ();

const mainController = require ("../controllers/mainController");

router.get ("/", mainController.raiz);
router.get ("/crear", mainController.crear);
router.get ("/editar/:id", mainController.editar);
router.post ("/editar/:id", mainController.editarProcess);


module.exports = router;
