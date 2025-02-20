import express, { json } from "express";

const app = express();
const PORT = 5000;
// middleware
app.use(json());

const planets = [
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

app.get("/api/planets", (req, res) => {
  res.status(200).json(planets);
});

app.get("/api/planets/:id", (req, res) => {
  const { id } = req.params;
  const planetFound = planets.find((p) => p.id === parseInt(id));
  if (!planetFound) {
    res.status(400).json({
      message: "pianeta non trovato",
    });
  }
  res.status(200).json(planetFound);
});
app.post("/api/planets", (req, res) => {
  const { id, nome } = req.body;
  if (!nome || !id) {
    res
      .status(400)
      .json({ message: "id o nome mancanti, impossibile creare il pianeta" });
  }

  const newPlanet = {
    id: planets.length + 1,
    nome,
  };

  planets.push(newPlanet);
  res.status(200).json({ message: "pianeta creato correttamente" });
});

app.put("/api/planets/:id", (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;
  const planetFound = planets.find((p) => p.id === parseInt(id));
  if (!planetFound) {
    res.status(400).json({ message: "id pianeta non trovato" });
  }

  planetFound.name = nome;
  res.status(200).json({ message: "pianeta modificato correttamente" });
});


app.delete('/api/planets/:id', (req,res)=>{
    const {id}=req.params

   
const planetFound=planets.find(p=>p.id===parseInt(id))

if(!planetFound){
    res.status(400).json({message:'id non trovato'})
}

planets.splice(planetFound, 1)
res.status(200).json({message:'pianeta eliminato correttamente'})
})
app.listen(PORT, () => {
  console.log(`Il server è in ascolto su http://localhost:${PORT}`);
});
