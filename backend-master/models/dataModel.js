const mongoose = require('mongoose');

const ArqdbSchema = new mongoose.Schema({
  codigo: {
    type: String,
    required: true,
    unique: true
  },
  cantidad: {
    type: Number,
    required: true
  }
});

const Arqdb = mongoose.model('Arqdb', ArqdbSchema);

module.exports = Arqdb;