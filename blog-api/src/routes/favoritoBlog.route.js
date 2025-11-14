import express from 'express';
import { getFavoritosBlogs, getFavoritoBlog, createFavoritoBlog, editFavoritoBlog, removeFavoritoBlog } 
from '../controllers/favoritoBlog.controller.js';

const router = express.Router();

router.get('/', getFavoritosBlogs);
router.get('/:id', getFavoritoBlog);
router.post('/', createFavoritoBlog);
router.put('/:id', editFavoritoBlog);
router.delete('/:id', removeFavoritoBlog);

export default router;
