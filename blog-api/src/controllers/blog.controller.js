import * as Blog from '../models/blog.model.js';

export const getBlogs = async (req, res) => {
    try {
        const dataBlogs = await Blog.getAllBlogs();
        res.status(200).json({
            message: "Blogs obtenidos exitosamente",
            data: dataBlogs
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al obtener todos los blogs.",
            error
        });
    }    
}

export const getBlog = async (req, res) => {
    try {
        const dataBlog = await Blog.getBlog(req.params.id);
        if (!dataBlog) return res.json(404).json({message: "Blog no econtrado."});
        res
            .status(200)
            .json({
            message: "Blog obtenido exitosamente.",
            data: dataBlog
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener el blog.",
            error
        });
    }    
}

export const addBlog = async (req, res) => {
    try {

        req.body.image = req.file ? req.file.filename : null;

        const blog = await Blog.createBlog(req.body);

        res.status(201).json({
            message:"Blog creado exitosamente.",
            data:blog
        });

    } catch (error) {
        res.status(500).json({
            message: "Error al crear el nuevo blog.",
            error: error
        });
    }
}

export const editBlog = async (req, res) => {
    try {       

        req.body.imagen = req.file ? req.file.name : null;
        const result = await (req.params.id, req.body);
        res.status(200).json({
            message: "Blog actualizado exitosamente.",
            data: result
        });

    } catch (error) {
        return res.status(500).json({
            message: "Error al actualizar el blog.",
            error
        });
    }
}

export const removeBlog = async (req, res) => {
    try {
        
        await Blog.deleteBlog(req.params.id);
        res.status(200).json({
            message:"Blog eliminado exitosamente."
        });

    } catch (error) {
        return res.status(500).json({
            message: "Error al actualizar el blog.",
            error
        });
    }
}