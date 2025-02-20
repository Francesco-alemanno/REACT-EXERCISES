import express, {json} from 'express'
import  { create, deleteById, getAll, getOneById, updateById } from '../controllers/controllers.js'
const app= express()
const PORT=5000;


// middleware
app.use(json())
// -----

app.get('/api/planets', getAll)
app.get('/api/planets/:id', getOneById)
app.post('/api/planets', create)
app.put('/api/planets/:id', updateById)
app.delete("api/planets/:id", deleteById);


app.listen(PORT,()=>{
    console.log(`server in ascolto su http://localhost:${PORT}`)
})