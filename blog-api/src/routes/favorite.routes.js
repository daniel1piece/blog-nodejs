import express from 'express';
import {getFavorite, getFavorites, newFavorite, editFavorite, removeFavorite} from '../controllers/favorite.controller.js'
import { upload } from '../middlewares/upload.middleware.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { createFavoriteSchema } from '../schemas/favorite.schema.js';

const router = express.Router();

router.get('/', getFavorites);
router.get('/:id', getFavorite);
router.post('/', upload.none(), validateSchema(createFavoriteSchema), newFavorite);
router.put('/:id', editFavorite);
router.delete('/:id', removeFavorite);

export default router;
