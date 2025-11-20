import express from 'express';
import{getSubcategories, getSubcategory, createSubcategoria, editSubcategory, removeSubcategory}  from '../controllers/subcategory.controller.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { createSubcategorySchema } from '../schemas/subcategory.schema.js';
import { upload } from '../middlewares/upload.middleware.js';

const router = express.Router();
// const upload = multer();

router.get('/', getSubcategories);
router.get('/:id', getSubcategory);
router.post('/',  upload.none(), validateSchema(createSubcategorySchema),createSubcategoria);
router.put('/:id', editSubcategory);
router.delete('/:id', removeSubcategory);

export default router;