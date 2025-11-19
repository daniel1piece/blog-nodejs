import { z } from 'zod';

export const validateSchema = ( schema ) => async (req, res, next) => {
    try {
        if (!req.body) return res.status(400).json({
            message:"No se propocionaron datos para validar.",
            error:[]
        });
        // validations for type, length, value we use parse()
        // to validate if some info exists on the database
        // we use partAsync()
        const result = await schema.parseAsync(req.body);
        // zod makes change on the data structure
        req.body = result;
        next();
    } catch (error) {
        if (error instanceof z.ZodError) {
            error.issues;
            return res
            .status(400)
            .json({
                message:"Verifique los datos proporsionados",
                error: error.issues
            });
        }

        return res
        .status(500)
        .json({
            message: "Ocurrio un error, por favor intente de nuevo mas tarde",
            error: error.message
        });
    }
};