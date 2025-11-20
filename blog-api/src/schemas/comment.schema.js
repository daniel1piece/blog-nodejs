import { z } from 'zod';
import { getCommentById } from '../services/comment.service.js';

export const createCommentSchema = z.object({
    comentario: z
     .string('Debe ingresar un comentario')
     .min(10, 'El comentario debe llevar un minimo de 10 caracteres'),
    usuario_id: z    
    .coerce
    .bigint("El numeo debe ser entero.")
})
.superRefine( async (data, ctx) => {
    console.log(data.usuario_id);
    
    const existUsuario_id = await getCommentById(data.usuario_id);
    // if (existUsuario_id) {
    //     ctx.addIssue({
    //         code:"custom",
    //         message:"El usuario id no existe en la base de datos",
    //         path: ["usuario_id"]
    //     });
    // }
});