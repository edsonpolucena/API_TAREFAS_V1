const db = require('../config/db');

const NotasModel = {
    getAll: (callback) => {
        db.query('SELECT * FROM notas', callback);
    },
    create: (title, callback) => {
        db.query('INSERT INTO notas (title) VALUES (?)', [title], callback);
    },
    updateStatus: (id, status, callback) => {
        db.query('UPDATE notas SET status = ? WHERE id = ?', [status, id, callback]);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM notas WHERE id = ?', [id], callback); 
    },
};

module.exports = NotasModel;