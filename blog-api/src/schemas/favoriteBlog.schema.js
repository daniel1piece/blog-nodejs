import { z } from 'zod';
import { idUsuarioExists, idBlogExists, favoriteBlogsIdExists } from '../services/favoriteBlogs.service.js';

export const createFavoriteBlogsSchema = z.object({
    favorito: z
     .coerce
     .bigint("El valor de favorito no se ha registrado. Debe ser ya sea 1 o 0")
     .min(0, "El valor minimo debe ser 0")
     .max(1, "El Valor maximo debe ser 1"),
     usuario_id: z
      .coerce
      .bigint("El valor debe ser un numero entero")
      .min(1, "El valor de usuario id debe ser mayor a 0."),
    blog_id: z
     .coerce
     .bigint("El valor debe ser un numero entero")
     .min(1, "El valor de id de blog debe ser mayor 0.")
})
.superRefine( async (data, ctx) => {
    const usuarioIdExists = await idUsuarioExists(data.usuario_id);
    // console.log("t1", usuarioIdExists);    
    if (!usuarioIdExists) {
        ctx.addIssue({
            code:'custom',
            message:'El id de usuario registrado no existe en el sistema',
            path:["usuario_id"]
        });
    }
    
    const blogIdExists = await idBlogExists(data.blog_id);
    if (!blogIdExists) {
        ctx.addIssue({
            code:"custom",
            message:"El blog no existe en el sistema o no fue encontrado",
            path:["blog_id"]
        });
    }

    const favoriteBlogsExists = await favoriteBlogsIdExists(data.usuario_id, data.blog_id);

    if (favoriteBlogsExists) {
        ctx.addIssue({
            code:"custom",
            message:"El favorito ya existe (ya fue dado por usuario anteriormente) en el blog",
            path:["usuario_id", "blog_id"]
        });
    }
});