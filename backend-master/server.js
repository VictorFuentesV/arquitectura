// server.js
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const Arqdb = require('./models/dataModel');

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000' // Reemplaza por la URL de tu aplicación de React
}));

const dataRoute = require("./routes/dataRoute");

// mongodb connection
const mongoUrl = "mongodb+srv://oscarlobod01:Tombalobo6@cluster0.br3bzya.mongodb.net/Arqdb";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
    console.log("Conexión exitosa a MongoDB");

    app.listen(3001, () => {
      console.log("Server Started");
    });
  })
  .catch((e) => {
    console.log("Error de conexión a MongoDB:", e);
  });

// apis
app.get("/", async (req, res) => {
  res.send("Success!!!!!!");
});

// Rutas relacionadas con los datos
app.use("/", dataRoute);