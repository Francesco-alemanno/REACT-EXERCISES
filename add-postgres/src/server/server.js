import express, { json } from 'express'
import cors  from 'cors'
import { addImage, deletePlanetsById, getAll, getPlanetsById, insertPlanet, insertWithId } from '../controllers/controllers.js'
import multer from 'multer'

const app= express()
const PORT = 5000
const storage=multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, './uploads')
    },
    filename:(req, file, cb)=>{
        cb(null, file.originalname)
    }
})
const upload= multer({storage:storage})
// middleware
app.use(json())
app.use(cors())

// funzionalita
app.use('/uploads',express.static('uploads'))
app.post('/planets/:id/image',upload.single("image"), addImage)
app.get('/planets', getAll)
app.get('/planets/:id', getPlanetsById)
app.post('/planets', insertPlanet)
app.put('/planets/:id', insertWithId)
app.delete('/planets/:id', deletePlanetsById)
// 
app.listen(PORT, ()=>{
    console.log(`Server in ascolto su 'http://localhost:${PORT}`)
})
