import { json } from 'express';
import * as Comentario from '../models/comentario.model.js';

export const getComments = async (req, res) => {
    const comentarios = await Comentario.getAllComments();
    res.json(comentarios);
}

export const getComment = async (req, res) => {
    const comment = await Comentario.getComment(req.params.id);
    if (!comment) return res.status(404).json({error:'Comentario no encontrada'});
    res.json(comment);
}

export const addComment = async (req, res) => {
    const comment = await Comentario.createComment(req.body['comentario'], req.body['usuario_id']);
    res.status(201).json(comment);
}

export const updateComment = async (req, res) => {
    const comment = await Comentario.updateComment(req.params.id, req.body['comentario']);
    if (!comment) return res.status(404).json({error: 'No se actualizo el comentario, comentario no econtrado.'});
    res.status(201).json({message:"El comentario fue actualizado exitosamente", data: comment});
}

export const deleteComment = async (req, res) => {
    const comment = await Comentario.deleteComment(req.params.id);
    return res.status(201).json({message: "Mensaje eliminado", dato: comment});
}