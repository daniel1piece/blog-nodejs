import { z } from 'zod';
import { existUser } from '../services/user.service.js';
import { existCategory } from '../services/category.service.js';
import { existSubcategory } from '../services/subcategory.service.js';

export const createBlogSchema = z.object({
    titulo: z
            .string('El titulo es obligatorio')
            .length(3)
            .min(3, 'El titulo debe tener al menos 3 caracteres'),
    contenido: z
                .string("Contenido es obligatorio")
                .min(150, 'El contenido debe tener al menos 150 caracteres.'),
    id_usuario: z
                //.coerce() // convierte cualquier valor numerico de string a numero no funciona, necesito revisa oninternet
                .number('El usuario es obligatorio')
                .int('El usuario no tiene el formato valido'),
    id_categoria: z
               // .coerce()
                .number('La categoria es obligatoria')
                .int('La categoria no tiene formato valido'),
    id_subcategoria: z
                //.coerce()
                .number('La subcategoria es obligatoria')
                .int('El usuario no tiene un formato valido')
})  // below we check if the data (info) does exist on the database. 
.superRefine(async(data, ctx) => {
    const userExist = await existUser(data.id_usuario);
    if (!userExist) {
        ctx.addIssue({
            code: "custom",
            message: 'El usuario no existe',
            path: ['id_usuario']
        });
    }

    const categoryExist = await existCategory(data.id_categoria);
    if (!categoryExist) {
        ctx.addIssue({
            code:'custom',
            message:'La categoria no existe',
            path:['id_categoria']
        });
    }

    const subcategoryExist = await existSubcategory(data.id_subcategoria);
    if (!subcategoryExist) {
        ctx.addIssue({
            code:'custom',
            message:'La subcategoria no existe.',
            path:['id_subcategoria']
        });
    }
});