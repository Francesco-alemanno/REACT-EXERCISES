import { json } from "express";
import pgPromise from "pg-promise";
const db = pgPromise()(
  "postgres://postgres:Fingerskate1@localhost:5432/planets"
);

const createTable = async () => {
  try {
    await db.none(`DROP TABLE IF EXISTS planets`);
    await db.none(`
            CREATE TABLE  planets (
           id SERIAL NOT NULL PRIMARY KEY,
           nome TEXT NOT NULL ,
           img TEXT
            )`);
    await db.none(`INSERT INTO planets (nome) VALUES ('terra')`);
    await db.none(`INSERT INTO planets (nome) VALUES ('marte')`);
    console.log("tabella creata o creata gia");
  } catch (error) {
    if (error) {
      console.error(error.message);
    }
  }
};
createTable();
export const getAll = async (req, res) => {
  try {
    const planets = await db.many(`SELECT * FROM planets`);
    console.log("Funzione get all andata a buon fine");
    res.status(200).json(planets);
  } catch (error) {
    res
      .status(400)
      .json({ msg: "errore nella ricerca degli elementi della tabella" });
  }
};

export const getPlanetsById = async (req, res) => {
  const { id } = req.params;
  try {
    const planet = await db.oneOrNone("SELECT * FROM planets WHERE id = $1", [
      id,
    ]);
    if (!planet) {
      return res.status(400).json({ msg: "Pianeta non trovato" });
    }
    res.status(200).json(planet);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Errore interno del server" });
  }
};

export const insertPlanet = async (req, res) => {
  const { nome } = req.body;

  try {
    await db.none("INSERT INTO planets (nome) VALUES ($1)", [nome]);
    return res.status(200).json({ msg: "Pianeta aggiunto correttamente" });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ msg: "Errore interno del server" });
  }
};

export const insertWithId = async (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;
  try {
    await db.none("UPDATE planets SET nome=$1 WHERE id=$2", [nome, id]);

    return res
      .status(200)
      .json({ msg: `Pianeta aggiornato correttamente all'id: ${id}` });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ msg: "Errore interno del server" });
  }
};

export const deletePlanetsById = async (req, res) => {
  const { id } = req.params;
  try {
    await db.none("DELETE FROM planets WHERE id=$1", [id]);
    res
      .status(200)
      .json({ msg: `pianeta eliminato correttamente all'id ${id}` });
  } catch (error) {
    res.status(500).json({ msg: `pianeta non elimanto` });
  }
};

export const addImage = async (req, res) => {
  const  image  = req.file.path;
  const { id } = req.params;
  try {
    await db.none(
      `UPDATE planets
        SET image=$2
        WHERE id=$1;`,
      [id, image]
    );
    res
      .status(200)
      .json({ msg: `immagine aggiunta correttamente all'id ${id}` });
  } catch (error) {
    res.status(500).json({ msg: `errore nell'aggiunta dell'immagine` });
  }
};
