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

export const addCategory = async(req, res) => {
    const category = await Category.createCategory(req.body);
    res.status(201).json(category);
}

export const editCategory = async(req, res) => {
    const category = await Category.updateCategory(req.params.id, req.body);
    res.status(201).json({message: "La categoria h sido actualizada", data: category}); 
}

export const removeCategory = async (req, res) => {
    const category = await Category.deleteCategory(req.params.id);
    res.status(201).json({message: "Categoria eliminada"});
}