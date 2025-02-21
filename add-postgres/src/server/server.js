import express, { json } from 'express'
import cors  from 'cors'
import { deletePlanetsById, getAll, getPlanetsById, insertPlanet, insertWithId } from '../controllers/controllers.js'

const app= express()
const PORT = 5000
// middleware
app.use(json())
app.use(cors())

// funzionalita
app.get('/planets', getAll)
app.get('/planets/:id', getPlanetsById)
app.post('/planets', insertPlanet)
app.put('/planets/:id', insertWithId)
app.delete('/planets/:id', deletePlanetsById)
// 
app.listen(PORT, ()=>{
    console.log(`Server in ascolto su 'http://localhost:${PORT}`)
})
