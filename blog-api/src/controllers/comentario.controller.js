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
    const comment = await Comentario.createComment(req.body.comment, req.body.blog_id);
    res.status(201).json(comment);
}