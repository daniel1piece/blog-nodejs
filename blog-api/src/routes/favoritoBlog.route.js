import express from 'express';
import { getAllFavoritosBlogs, getFavoritoBlog, createFavoritoBlog, editFavoritoBlog, removeFavoritoBlog } 
from '../controllers/favoritoBlog.controller.js';

const router = express.Router();

router.get('/', getAllFavoritosBlogs);
router.get('/:id', getFavoritoBlog);
router.post('/', createFavoritoBlog);
router.put('/:id', editFavoritoBlog);
router.delete('/:id', removeFavoritoBlog);

export default router;
