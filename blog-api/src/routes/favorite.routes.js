import express from 'express';
import {getFavorite, getFavorites, newFavorite, editFavorite, removeFavorite} from '../controllers/favorite.controller.js'

const router = express.Router();

router.get('/', getFavorites);
router.get('/:id', getFavorite);
router.post('/', newFavorite);
router.put('/:id', editFavorite);
router.delete('/:id', removeFavorite);

export default router;
