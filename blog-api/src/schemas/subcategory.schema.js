import {  z } from 'zod';
import { getSubcategoryByName } from '../services/subcategory.service.js';

export const createSubcategorySchema = z.object({
    nombre: z
     .string('El nombre de la subcategoria es obligatorio')
     .min(3, 'El nombre de la subcategoria debe tener al menos 3 caracteres')
     .max(50, 'El nombre de la subcategoria debe tener como maximo 50 caracteres.')
})
.superRefine( async (data, ctx) => {
    const existCategoryName = await getSubcategoryByName(data.nombre.toLowerCase());
    if (existCategoryName) {
        ctx.addIssue({
            code: 'custom',
            message:'Ya existe una subcategoria con ese nombre',
            path:['nombre']
        });
    }
});