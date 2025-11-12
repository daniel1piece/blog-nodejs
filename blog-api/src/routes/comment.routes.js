import express from 'express';
import { addComment, getComments, getComment, updateComment, deleteComment } from '../controllers/comentario.controller.js';

const router = express.Router();

router.get('/', getComments);
router.get('/:id', getComment);
router.post('/', addComment);
router.put('/:id', updateComment);
router.delete('/:id', deleteComment);

export default router;