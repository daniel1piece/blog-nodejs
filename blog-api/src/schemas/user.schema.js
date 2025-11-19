import { z } from 'zod';
import { existUser } from '../services/user.service';

export const createUserSchema = z.object({
    nombre: z
             .string('El  nombre es obligatorio')
             .length(3)
             .min(3, "El titulo debe tener un minimo de 3 caracteres."),
    email: z
            .string('El email es obligatorio')
            .email("El correo no tiene un formate valido"),
    password: z
              .string("La contraseña es obligatoria")
              .length(9)
              .min(9, "La contraseña debe contener al menos 9 caracteres")

})
.superRefine(async (data, ctx) => {
    const nameExist = data.usuario;
    if (!nameExist) {
        ctx.addIssue({
            code:"custom",
            message:"El nombre no existe",
            path:["usuario"]
        });
    }

    const emailExist = await data.email;
    if (!emailExist) {
        ctx.addIssue({
            code:"custom",
            message:"El correo no existe",
            path:["email"]
        });
    }

    const passwordExist = await data.password;
    if (!passwordExist) {
        ctx.addIssue({
            code:"custom",
            message:"La contraseña no existe",
            path:["password"]
        });
    }
});