import { z } from 'zod';
import { getUserByEmail } from '../services/user.service.js';

export const createUserSchema = z.object({
    nombre: z
             .string("El nombre es obligatorio")
             .min(3, "Nombre debe tener al menos 3 caractere"),
    email: z
            .string("El correo el obligatorio")
            .email('Ingrese un email')
            .min(5, 'El correo debe tener al menos 5 caracteres.'),
    password: z
               .string('Ingrese una contraseña')
               .min(9, "Cotraseña debe tener al menos 9 caracteres")
               .max(20,'La contrasena debe tener como max 20 caracteres')
               .regex(/[a-z]/, 'La contraseña debe tener al menos una letra minuscula')
               .regex(/[A-Z]/, 'La contraseña debe tener al menos una letra mayuscula')
               .regex(/[0-9]/, 'La contraseña debe tener al menos una letra numero')
               .regex(/[$%+*-/!#,<>()&@!~.,{}?]/, 'La contraseña debe tener al menos un caracter especial ($,%,+,*,-,/,!,#,<,>,(,),&,@,!,~,.,{,},?,)'),
   confimPasswod: z
                  .string('La confirmacion de la contraseñ es obligatoria')

}) // The below method works to check things on the database
.superRefine(async (data, ctx)=> {
     const passwordExists = data.password.includes(data.password);
     if (!passwordExists) {
        ctx.addIssue({
            code:'custom',
            message:"La contraseña no debe contener su nombre",
            path:['password']
        });
     }

     if (data.password !== data.confirmPassword){
        ctx.addIssue({
            code:"custom",
            path:["confirmPassword", "password"],
            message:"Las contrseñas no coinciden"
        });
     }

     const existingUser = await getUserByEmail(data.email);
     if (existingUser) {
        ctx.addIssue({
            code:"custom",
            path:["email"],
            message:"El email ya esta registrado en al plataforma."
        });
     }

});