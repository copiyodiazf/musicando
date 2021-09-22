var express = require ('express');
var router = express.Router();
var cancionesController = require ('../controllers/cancionesController')
//Creacion

router.post('/', cancionesController.crear);
//router.post('/crear', cancionesController.guardar);

//listado canciones

router.get('/', cancionesController.listado);

//detalle
router.get('/:id', cancionesController.detalle);

//Actualizacion
router.put('/:id', cancionesController.editar );

//Borrado
router.delete('/:id', cancionesController.borrar)

router.get('/genero/:id', cancionesController.genero)

module.exports = router;