import express from "express";
const app = express();
export const planets = [
  { id: 1, name: "Mercurio" },
  { id: 2, name: "Venere" },
  { id: 3, name: "Terra" },
  { id: 4, name: "Marte" },
  { id: 5, name: "Giove" },
  { id: 6, name: "Saturno" },
  { id: 7, name: "Urano" },
  { id: 8, name: "Nettuno" },
  { id: 9, name: "Plutone" },
];
export const getAll = (req, res) => {
  res.status(200).json(planets);
};

export const getOneById = (req, res) => {
  const { id } = req.params;

  const planetFound = planets.find((p) => p.id === parseInt(id));
  if (!planetFound) {
    res.status(400).json({ message: "id non trovato" });
  }

  res.status(200).json(planetFound);
};

export const create = (req, res) => {
  const { nome } = req.body;
  if (!nome) {
    res.status(400).json({ msg: "inserire il nome" });
  }
  const newPlanet = {
    id: planets.length + 1,
    nome,
  };
  planets = [...planets, newPlanet];

  res.status(200).json({ msg: "pianeta modificato correttamente" });
};

export const updateById = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const planetFound = planets.find((p) => p.id === parseInt(id));
  if (!planetFound) {
    res.status(400).json({ msg: "id non trovato" });
  }
  planetFound.name = name;
  res.status(200).json({ msg: "pianeta modificato correttamente" });
};

export const deleteById = (req, res) => {
    const { id } = req.params;
    
    // Find the index of the planet with the given id
    const planetIndex = planets.findIndex(p => p.id === parseInt(id));
  
    if (planetIndex === -1) {
      return res.status(400).json({ msg: 'id non trovato' }); // Return if planet not found
    }
  
    // Remove the planet from the array
    planets.splice(planetIndex, 1);
  
    // Return success message
    res.status(200).json({ msg: 'Pianeta eliminato correttamente' });
  };
