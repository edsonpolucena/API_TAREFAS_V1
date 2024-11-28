const NotasModel = require('../models/notasModel');

const NotasController = {
    getALL: (req, res) => {
        NotasModel.getAll((err, results) => {
            if (err) return res.status(500).json({error: err.message});
            res.json(results);
        });
    },
    create: (req, res) => {
        const {title} = req.body;
        NotasModel.create(title, (err, results)=>{
            if (err) return res.status(500).json({error: err.message});
            res.json({id: results.insertId, title, status: 'Pendente'});
        });
    },
    updateStatus: (req, res) => {
        const {id} = req.params;
        const {status} = req.body;
        NotasModel.updateStatus(id, status, (err) => {
            if (err) return res.status(500).json({error: err.message});
            res.json({message: 'Status atualizado com sucesso!'});
        });
    },
    delete: (req, res) => {
        NotasModel.delete(id, (err)=> {
            if (err) return res.status(500).json({error: err.message});
            res.json({message: 'nota excluida com sucesso!'});  
        });
    },
};

module.exports = NotasController;