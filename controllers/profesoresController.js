class ProfesoresController {
    constructor() {

    }

    consultar(req, res) {
        res.json({msg: 'Consulta profesores desde clase'});
    }

    consultarDetalle(req, res) {
        res.json({msg: 'Consulta detalle profesor desde clase'});
    }

    ingresar(req, res) {
        res.json({msg: 'Ingresa profesor desde clase'});
    }

    actualizar(req, res) {
        res.json({msg: 'Actualiza profesor desde clase'});
    }

    borrar(req, res) {
        res.json({msg: 'Borra profesor desde clase'});
    }
}

module.exports = new ProfesoresController();