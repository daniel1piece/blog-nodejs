import * as Answer from '../models/blog.answers.model.js';

export const getAnswers = async (req, res) => {
    try {
        const answers = await Answer.getAllAnswers();
        res.status(200).json({
            message:"Las respuestas fueron obtenidas exitosamente.",
            data:answers
        });
    } catch (error) {
        res.status(500).json({
            message:"Ocurrio un error al intentar obtener todas las respuestas.",
            error:error
        });
    }
};

export const getAnswer = async (req, res) => {
    try {
        const answer = await Answer.getAnswer(req.params.id);

        if (!answer) res.status(200).json({message:"Esa respuesta no existe en el sistema", data:answer});

        res.status(200).json({
            message:"La respuesta fue obtenida exitosamente",
            data: answer
        });
    } catch (error) {
        res.status(500).json({
            message:"Ocurrio un error al intentar obtener la respuesta",
            error:error
        });
    }
};

export const createAnswer = async (req, res) => {
    try {
        const result = Answer.createAnswer(req.body);
        res.status(201).json({
            message:"Respuesta creada exitosamente",
            data:result
        });
    } catch (error) {
        res.status(500).json({
            message:"Ocurrio un error al intentar crear una respuesta",
            error:error
        });
    }
};

export const updateAnswer = async (req, res) => {
    try {
        const result = await Answer.updateAnswer(req.params.id, req.body);
        res.status(200).json({
            message:"La respuesta fue actualizada exitosamente",
            data: result
        });
    } catch (error) {
        res.status(500).json({
            message:"Ocurrio un error al intentar actualizar la respuesta",
            error:error
        });
    }
};

export const deleteAnswer = async (req, res) => {
    try {
        const result = await Answer.deleteAnswer(req.params.id);
        res.status(200).json({
            message:"La respuesta fue eliminada exitosamente",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            message:"Ocurrio un error al intentar eliminar la respuesta",
            error:error
        });
    }
}