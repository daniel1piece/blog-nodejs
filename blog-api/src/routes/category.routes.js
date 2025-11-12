import express from  'express';
import {addCategory, editCategory, getCategories, getCategory, removeCategory} from '../controllers/category.controller.js';

const categoryRoutes = express.Router();

categoryRoutes.get('/', getCategories);
categoryRoutes.get('/:id', getCategory);
categoryRoutes.post('/', addCategory);
categoryRoutes.put('/:id', editCategory);
categoryRoutes.delete('/:id', removeCategory);

export default categoryRoutes;