import express from 'express';
import { addComment, getComments } from '../controllers/comentario.controller.js';
import { getComment } from '../controllers/comentario.controller.js';

const router = express.Router();

router.get('/', getComments);
router.get('/:id', getComment);
router.post('/', addComment)


export default router;