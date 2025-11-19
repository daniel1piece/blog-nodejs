import * as FavoritoBlog from '../models/favoritoBlog.model.js';

export const getFavoritosBlogs = async (req, res) => {
    try {        
        const favoritosBlogs = await FavoritoBlog.getAllFavoritosBlogs();
        res
           .status(200)
           .json({
                message:"Favoritos de los blogs obtenidos exitosamente.",
                data: favoritosBlogs
           });
    } catch (error) {
        res
           .status(500)
           .json({
                message:"Error al intentar obtener favoritos de los blogs.",
                error
           });
    }   

}

export const getFavoritoBlog = async (req, res) => {
    try {
        const favoritoBlog = await FavoritoBlog.getFavoritoBlog(req.params.id);
        if (!favoritoBlog) res.status(200).json({message:"No hay ningun favorito en ningun blog."});
        res
           .status(200)
           .json({
                message:"Favorito del blog obtenido exitosamente.",
                data: favoritoBlog
           })
    } catch (error) {
        res
           .status(500)
           .json({
                message:"Error al intentar obtener favorito del blog",
                error
           });
    }
}

export const createFavoritoBlog = async (req, res) => {
    try {
        const favoritoBlog = await FavoritoBlog.createFavoritoBlog(req.body);
        res
           .status(201)
           .json({
                message:"Favorito Blog creado exitosamente.",
                data: favoritoBlog
           });
    } catch (error) {
        res
           .status(500)
           .json({
                message:"Error al intentar crear favorito del blog",
                error
           });
    }
}

export const editFavoritoBlog = async(req, res) => {
    try {
        const favoritoBlog = await FavoritoBlog.updateFavoritoBlog(req.params.id, req.body);
        res
           .status(200)
           .json({
                message:"Favorito blog actualizado exitosamente.",
                data:favoritoBlog
           });
    } catch (error) {
         res
           .status(500)
           .json({
                message:"Error al intentar actualizar favorito del blog",
                error
           });
    }
}

export const removeFavoritoBlog = async (req, res) => {
    try {
        const info = await FavoritoBlog.deleteFavoritoBlog(req.params.id);
        res
            .status(200)
            .json({
                message:"Favorito eliminado exitosamente.",
                data: info
            });
    } catch (error) {
         res
           .status(500)
           .json({
                message:"Error al intentar borrar favorito del blog",
                error
           });
    }
}