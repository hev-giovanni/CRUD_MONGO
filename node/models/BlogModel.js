//importar la conexion a la DB
import mongoose from "mongoose";
const Schema = mongoose.Schema

const blogSchema = new Schema(
    {
        title: {type:String},
        content: {type:String},
    },
    {collection:'database_app'}
)
export default mongoose.model('BlogModel', blogSchema)