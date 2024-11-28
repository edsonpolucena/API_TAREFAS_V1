 const express = require('express');
 const NotasController = require('../controllers/notasControllers');
 const router = express.Router();   

 router.get('/notas', NotasController.getALL);
 router.post('/notas', NotasController.create);
 router.put('/notas/id', NotasController.updateStatus);
 router.delete('/notas/id', NotasController.delete);

 module.exports = router;