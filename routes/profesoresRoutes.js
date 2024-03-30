const express = require('express');
const router = express.Router();
const profesoresController = require('../controllers/profesoresController.js');

router.get('/', profesoresController.consultar);

router.post('/', profesoresController.ingresar);

router.route("/:id")
    .get(profesoresController.consultarDetalle)
    .put(profesoresController.actualizar)
    .delete(profesoresController.borrar);



module.exports = router;
