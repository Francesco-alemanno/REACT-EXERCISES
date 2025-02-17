const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
require("express-async-errors");

dotenv.config();

const app = express();

app.use(express.json());

app.use(morgan("dev"));


let planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];


app.get("/planets", (req, res) => {
  res.json(planets);
});


app.get("/planets/:id", (req, res) => {
  const planetId = parseInt(req.params.id);
  const planet = planets.find(p => p.id === planetId);
  if (!planet) {
    return res.status(404).json({ message: "Pianeta non trovato" });
  }
  res.json(planet);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Si è verificato un errore" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server in esecuzione sulla porta ${port}`);
});
