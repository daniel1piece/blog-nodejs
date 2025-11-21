import jwt from 'jsonwebtoken';
import { isTokenActive } from '../models/token.model';

export const verifyToken = async (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"];

        if (!authHeader) return res.status(401).json({message:"Necesitas autorizacion"});
        //Structure of the authHeader content authorization:Bearer <el_token_jwt>
        const token = authHeader.split(" ")[1];

        if (!token) return res.status(401).json({message:"Formato de autoizacion es invalido"}); 
        
        try {
            const isActive = await isTokenActive(token);
            if (!isActive) return res.status(401).json({ message: "No esta autorizado. Por favor inicie sesion nuevamente." });
            // if there's no error here then we may continue()
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decode;
            next();

        } catch (error) {
            return res.status(401).json({message: "Token invalido o expirado"});
        }
    } catch (error) {
        return res
         .json(500)
         .json({
            message:"Ocurrio un error, por favor intenta de nuevo mas tarde",
            error:error
         });
    }
}

// It is important to set up a correct
// time for the token to expire, we
// need to use a technique to revoke
// that token. So the user, may not
// leave the session open accidentally. 

