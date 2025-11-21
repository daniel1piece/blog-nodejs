import { z } from 'zod';
import { getUserById } from '../services/comment.service.js';

export const createCommentSchema = z.object({
    comentario: z
     .string('Debe ingresar un comentario')
     .min(1, 'El comentario debe llevar un minimo de 10 caracteres'),
    usuario_id: z    
    .coerce
    .bigint("El numero debe ser entero.")
})
.superRefine( async (data, ctx) => {   
    const userExist = await getUserById(data.usuario_id);
    console.log(userExist);
    
    if (!userExist) {
        ctx.addIssue({
            code:'custom',
            message:'El usuario no existe, el id no esta registrado',
            path:['usuario_id']
        });
    }
});
