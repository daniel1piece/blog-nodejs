import express from  'express';
import {addCategory, getCategories, getCategory, removeCategory} from '../controllers/category.controller.js';
import { updateCategory } from '../models/category.model.js';

const categoryRoutes = express.Router();

categoryRoutes.get('/', getCategories);
categoryRoutes.get('/:id', getCategory);
categoryRoutes.post('/', addCategory);
categoryRoutes.put('/:id', updateCategory);
categoryRoutes.delete('/:id', removeCategory);

export default categoryRoutes;