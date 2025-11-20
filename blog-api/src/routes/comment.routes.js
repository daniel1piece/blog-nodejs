import express from 'express';
import { addComment, getComments, getComment, updateComment, deleteComment } from '../controllers/comentario.controller.js';
import multer from 'multer';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { createCommentSchema } from '../schemas/comment.schema.js';
import { upload } from '../middlewares/upload.middleware.js';

const router = express.Router();
// const upload = multer();

router.get('/', getComments);
router.get('/:id', getComment);
router.post('/', upload.none(), validateSchema(createCommentSchema),addComment);
router.put('/:id', updateComment);
router.delete('/:id', deleteComment);

export default router;