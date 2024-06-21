const express = require('express');
const router = express.Router();
const Arqdb = require('../models/dataModel');

// Obtener todos los datos
router.get('/productos', async (req, res) => {
  try {
    const data = await Arqdb.find();
    console.log('Datos obtenidos:', data); // Agregar este console.log
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;