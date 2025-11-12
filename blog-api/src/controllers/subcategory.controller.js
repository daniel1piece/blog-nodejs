import * as Subcategory from '../models/subcategory.model.js';
// Since the controller will comunicate with the frontend
// It will always have request and response. 
export const getSubcategories = async (req, res) => {
    try {
       const dataCategories = await Subcategory.getAllSubcategories();
       res
          .status(200)
          .json({
                mensaje: "Subcategorias obtenidas con exito.",
                data:dataCategories
            })
    } catch(error) {
        res
           .status(500)
           .json({
               message:"Error al obtener las subcategorias.",
               error: error
           });
    }
};

export const getSubcategory = async (req, res) => {
    try {
        const subcategory = await Subcategory.getSubcategoryById(req.params.id);
        if(!subcategory) res.status(404).json({
            message: "subcategoria no encontrada."
        });
        res.status(200).json({message: "Subcategoria encontrada", data: subcategory});
    } catch (error) {
         res
           .status(500)
           .json({
               message:"Error al obtener la subcategoria.",
               error: error
           });
    }
};

export const createSubcategoria = async (req, res) => {
    try {
        const subcategory = await Subcategory.createSubcategory(req.body);
        res.status(201).json({message:"Subcategoria creada exitosamente", data: subcategory});
    } catch (error) {
        res
           .status(500)
           .json({
               message:"Error al crear la subcategoria.",
               error: error
           });
    }
};

export const editSubcategory = async (req, res) => {
    try {
       const subcategory = await Subcategory.updateSubcategory(req.params.id, req.body);
       res.status(200).json({message:"Subcategoria actualizada cone exito",data: subcategory}); 
    } catch (error) {
        res
           .status(500)
           .json({
                message:"Error al actualizar la subcategoria.",
                error: error
           });
    }
};

export const  removeSubcategory = async (req, res) => {
    try {
        const subcategory = await Subcategory.deleteCategory(req.params.id);
        res.status(201).json({
            message:"Subcategoria borrada exitosamente.",
            data: subcategory
        });
    } catch (error) {
        res
           .status(500)
           .json({
                message:"Error al borrar la subcategoria.",
                error: error
           });
    }
};