import express from  'express';
import {addCategory, editCategory, getCategories, getCategory, removeCategory} from '../controllers/category.controller.js';
import multer from 'multer';

const categoryRoutes = express.Router();
const upload = multer();

categoryRoutes.get('/', getCategories);
categoryRoutes.get('/:id', getCategory);
categoryRoutes.post('/', upload.none(), addCategory);
categoryRoutes.put('/:id', editCategory);
categoryRoutes.delete('/:id', removeCategory);

export default categoryRoutes;