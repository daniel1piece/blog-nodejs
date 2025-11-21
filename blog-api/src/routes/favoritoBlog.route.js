import express from 'express';
import { getAllFavoritosBlogs, getFavoritoBlog, createFavoritoBlog, editFavoritoBlog, removeFavoritoBlog } 
from '../controllers/favoritoBlog.controller.js';
import { upload } from '../middlewares/upload.middleware.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { createFavoriteBlogsSchema } from '../schemas/favoriteBlog.schema.js';

const router = express.Router();

router.get('/', getAllFavoritosBlogs);
router.get('/:id', getFavoritoBlog);
router.post('/', upload.none(), validateSchema(createFavoriteBlogsSchema), createFavoritoBlog);
router.put('/:id', upload.none(), validateSchema(createFavoriteBlogsSchema),editFavoritoBlog);
router.delete('/:id', removeFavoritoBlog);

export default router;
