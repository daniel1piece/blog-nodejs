import express from  'express';
import {addCategory, editCategory, getCategories, getCategory, removeCategory} from '../controllers/category.controller.js';
import multer from 'multer';
import {validateSchema} from '../middlewares/validator.middleware.js';
import { createCategory } from '../schemas/category.schema.js';
import { upload } from '../middlewares/upload.middleware.js';

const categoryRoutes = express.Router();
// const upload = multer();

categoryRoutes.get('/', getCategories);
categoryRoutes.get('/:id', getCategory);
categoryRoutes.post('/', upload.none(), validateSchema(createCategory), addCategory);
categoryRoutes.put('/:id', editCategory);
categoryRoutes.delete('/:id', removeCategory);

export default categoryRoutes;