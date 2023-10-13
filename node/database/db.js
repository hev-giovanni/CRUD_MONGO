import mongoose from 'mongoose'
const utl = 'mongodb://127.0.0.1:27017/crud'
mongoose.connect(utl)

const db= mongoose.connection
db.on('open',()=>{console.log("Conectado a Mongo DB")})
db.on('error',()=>{console.log("Error al conectar a Mongo DB")})

export default db
