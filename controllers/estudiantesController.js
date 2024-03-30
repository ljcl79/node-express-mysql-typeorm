class EstudiantesController {
    constructor() {

    }

    consultar(req, res) {
        res.json({msg: 'Consulta estudiantes desde clase'});
    }

    consultarDetalle(req, res) {
        const { id } = req.params;
        res.json({msg: `Consulta detalle estudiante desde clase con id ${id}`});
    }

    ingresar(req, res) {
        res.json({msg: 'Ingresa estudiante desde clase'});
    }

    actualizar(req, res) {
        res.json({msg: 'Actualiza estudiante desde clase'});
    }

    borrar(req, res) {
        res.json({msg: 'Borra estudiante desde clase'});
    }
}

module.exports = new EstudiantesController();