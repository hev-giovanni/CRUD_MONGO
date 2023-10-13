import express  from "express"
import cors from 'cors'

//importar la conexion a la DB
import db from "./database/db.js"

//ipmortamos nuestro enrutador
import blogRoutes from './routers/routes.js'

const app = express()

app.use (cors ())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/blogs',blogRoutes)

app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
})