import { z } from 'zod';
import { blogExist, userExist } from '../services/blog.answer.service.js';

export const createBlogAnswerSchema = z.object({
    answer: z
     .string("Ingrese una respuesta")
     .min(10)
     .max(500),
    id_blog: z
     .coerce
     .bigint("El id del blog debe ser un numero entero")
     .min(1, "El id de blog debe ser mayor a 0"),
    id_user: z
     .coerce
     .bigint("El id de usuario debe ser un numero entero")
     .min(1, "El id de usuario debe ser mayor a 0")
}).superRefine(async (data, ctx) => {

    const user = await userExist(data.id_user);    

    if (!user) {
        ctx.addIssue({
            code:"custom",
            message:"El usuario no existe en el sistema",
            path:["id_user"]
        });
    }

    const blog = await blogExist(data.id_blog);

    if (!blog) {
        ctx.addIssue({
            code:"custom",
            message:"El blog no existe en el sistema",
            path:["id_blog"]
        });
    }

});