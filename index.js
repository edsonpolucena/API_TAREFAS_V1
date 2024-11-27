const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'sua_senha_aqui',
    database: 'notasdb',
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao Banco (MySQL)');
});

app.get('/notas', (req, res) => {
    db.query('SELECT * FROM notas', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.post('/notas', (req, res) => {
    const {title} = req.body;
    db.query('INSERT INTO notas (title) VALUES (?)', [title], (err, result) => {
        if (err) throw err;
        res.json({id: result.insertId, title, status: "Pendente"});
    });
});

app.put('/notas/:id', (req, res) => {
    const {id} = req.params;
    const {status} = req.body;
    db.query('UPDATE notas SET status = ? WHERE id = ?', [status, id], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Status atualizado com sucesso!'});
    });
});

app.delete('/notas/:id', (req, res) => {
    const {id} = req.params;
    db.query('DELETE FROM notas WHERE id = ?', [id], (err, result) => {
        if (err) throw err;
        res.json({message: 'Tarefa exluida com sucesso!'});
    });
});

app.listen(3000, ()=> {
    console.log("API rodando na porta 3000");
});