const mongoose = require('mongoose');

const post = new mongoose.Schema({
    titulo: { type: String, required: true },
    contenido: { type: String, required: true },
    imgCabecera: { type: String, required: true },
    fecha: { type: Date, required: true },
    autor: { type: String, required: true }
});

module.exports = mongoose.model('post', post);