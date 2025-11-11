import express from  'express';
import {getCategories, getCategory} from '../controllers/category.controller.js';

const categoryRoutes = express.Router();

categoryRoutes.get('/', getCategories);
categoryRoutes.get('/:id', getCategory)

export default categoryRoutes;