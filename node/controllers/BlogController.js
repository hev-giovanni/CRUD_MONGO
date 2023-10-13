//importamos el modelo
import BlogModel from "../models/BlogModel.js";

//**Metodos para el CRUD **//


//Mostrar todos los blogs
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.find()
        res.status(200).json(blogs)
    }
    catch (error){
        res.json({message:error.message})
        
    }
}


// Mostrar un blog
export const getBlog = async (req,res)=> {
    try {
            const id = req.params.id
            await BlogModel.findById({_id:id}).then((blog)=>{
                res.status(200).json(blog)    
            })

    } catch (error){
        res.json({message:error.message})
    }

}

//Crear un blog
export const createBlog = async (req,res) => {
    try{
        BlogModel.create(req.body)
        res.status(200).json({"message":"Registro creado correctamente"})
    } catch (error){
        res.json({message:error.message +"hever"})
        
    }
}

//Actualizar un blog

export const updateBlog = async (req,res)=>{
    try{
        const id = req.params.id
        await BlogModel.updateOne({_id:id}, req.body).then(res =>{
            console.log(res)
        })
        res.status(200).json({
            "message":"Registro actualizado correctamente!"
        })
    }
    catch (error){
        console.log("eror aca")
        res.json({message:error.message})
    }
}

// Eliminar un blog
export const deleteBlog = async (req,res)=> {
    try{
        const id = req.params.id
        await BlogModel.deleteOne({_id:id}).then (res=>{
            console.log(res)
        })
        res.status(200).json({
            "message":"Registro eliminado correctamente!"
        })
    }
    catch (error){
        res.json({message:error.message})
    }
}






















