const express = require('express');
const bodyParser = require('body-parser');
const notasRoutes = require('./routes/notasRoutes');
require('dotenv').config();

const app = express();  
app.user(bodyParser.json());    

app.use('/notas', notasRoutes);
app.listen(process.nextTick.PORT, () => {
    console.log("API rodando na porta ${process.env.PORT}");
});