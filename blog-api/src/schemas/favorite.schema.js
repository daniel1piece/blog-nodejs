import { z } from 'zod';
import { idUsuarioExist, idComentarioExist, idFavoriteExist } from '../services/favorite.service.js';

export const createFavoriteSchema = z.object({
    favorito: z
     .coerce
     .bigint("Debe dar like a un comentario")
     .min(0, "El valor del favorito no puede ser menor a 0")
     .max(1, "El valor del favorito no puede ser mayor a 1"),
    id_usuario: z
     .coerce
     .bigint("El id de usuario debe ser un numero entero.")
     .min(1, "El id de usuario debe ser mayor a 0."),
    id_comentario: z
     .coerce
     .bigint("El id de comentario debe ser numero entero.")
     .min(1, "El id de comentario debe ser menor a 0.")
})
.superRefine(async (data, ctx) =>  {
    const usuarioExist = await idUsuarioExist(data.id_usuario);
    // console.log(usuarioExist, "t1");    
    if (!usuarioExist) {
        ctx.addIssue({
            code:"custom",
            message:"El usuario no existe en el sistema",
            path:["id_usuario"]
        });
    }

    const comentarioExists = await idComentarioExist(data.id_comentario);
    if (!comentarioExists) {
        ctx.addIssue({
            code: "custom",
            message: "El comentario al que le dio me favorito ya no existe.",
            path:["id_comentario"]
        });
    }

    const favoriteExists = await idFavoriteExist(data.id_usuario, data.id_comentario);
    if (favoriteExists) {
          ctx.addIssue({
            code: "custom",
            message: "El favorito ya ha sido registrado, por favor modifique el favorito si asi lo desea.",
            path:["id_usuario", "id_comentario"]
        });
    }

});