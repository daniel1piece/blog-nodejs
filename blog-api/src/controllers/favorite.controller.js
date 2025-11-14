import * as Favorite from '../models/favorite.model.js';

export const getFavorites = async (req, res) => {    
    try {
        const favorites = await Favorite.getFavorites();
        res.status(200).json({
            message:'Favoritos obtenidos con exito.',
            data:favorites
        })
    } catch (error) {
        res
            .status(500)
            .json({
                message:"Error al obtener los favoritos",
                error:error
            })
    }
}

export const getFavorite = async (req, res) => {
    try {
        const favorite = await Favorite.getFavorite(req.params.id);
        res.status(200).json({
            message:'Favorito obtenido exitosamente.',
            data:favorite
        })
    } catch (error) {
        res
            .status(500)
            .json({
                message:"Error al obtener favorito.",
                error:error
            })
    }
}

export const newFavorite = async (req, res) => {
    try {
        const newFavorite =  await Favorite.createFavorite(req.body);
        res
           .status(201)
           .json({
            message:"Favorito creado exitosamente",
            data:newFavorite
           })
    } catch (error) {
        res
            .status(500)
            .json({
                message: "Error al intentar crear favorito",
                error:error
            })
    }   
}

export const editFavorite = async (req, res) => {
    try {
        const favorite = await Favorite.updateFavorite(req.params.id, req.body);
        res
           .status(200)
           .json({
                message:"Favorito actualizado exitosamente.",
                data:favorite
           })
    } catch (error) {
        res
            .status(500)
            .json({
                message:"Error al intentar actualizar favorito",
                error:error
            })
    }
}

export const removeFavorite = async (req, res) => {
    try {
        const favorite = await Favorite.deleteFavorite(req.params.id);
        res
            .status(201)
            .json({
                message: "Favorito borrado exitosamente",
                data:favorite
            })
    } catch (error) {
        res
            .status(500)
            .json({
                message: "Ocurrio un error al intentar remover favorito",
                error
            })
    }
}