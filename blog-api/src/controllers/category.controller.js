import * as Category from '../models/category.model.js';

export const getCategories = async (req, res) => {
    const categories = await Category.getAllCategories();
    res.json(categories);
}

export const getCategory = async (req, res) => {
    const category = await Category.getCategoryById(req.params.id);
    if ( !category ) return res.status(404).json({error:'Categoria no encontrada'});
    res.json(category);
}