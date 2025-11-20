import {  z } from 'zod';
import { getCategoryByName } from '../services/category.service.js';

export const createCategory = z.object({
    nombre: z
     .string('El nombre de la categoria es obligatorio')
     .min(3, 'El nombre de la categoria debe tener al menos 3 caracteres')
     .max(50, 'El nombre de la categoria debe tener como maximo 50 caracteres.')
})
.superRefine( async (data, ctx) => {
    const existCategoryName = await getCategoryByName(data.nombre.toLowerCase());
    if (existCategoryName) {
        ctx.addIssue({
            code: 'custom',
            message:'Ya existe una categoria con ese nombre',
            path:['nombre']
        });
    }
});