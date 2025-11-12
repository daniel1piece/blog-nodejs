import express from 'express';
import{getSubcategories, getSubcategory, createSubcategoria, editSubcategory, removeSubcategory}  from '../controllers/subcategory.controller.js';

const router = express.Router();

router.get('/', getSubcategories);
router.get('/:id', getSubcategory);
router.post('/',createSubcategoria);
router.put('/:id', editSubcategory);
router.delete('/:id', removeSubcategory);

export default router;