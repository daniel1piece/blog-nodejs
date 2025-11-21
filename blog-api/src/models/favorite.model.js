import pool from '../config/database.js';

export const  getFavorites = async () => {
    const [favorites] = await pool.query(`
            SELECT * 
            FROM favoritos_comentarios;
        `);
    return favorites;
}

export const  getFavorite = async (id) => {
    const [favorites] = await pool.query(`
            SELECT * 
            FROM favoritos_comentarios
            WHERE id = ?;
        `,
        [id]
    );

    if (!favorites[0]) return "No se encontro ningun favorito con ese id."

    return favorites[0];
}

export const  createFavorite = async (newFavorite) => {
    console.log(newFavorite)
    const {favorito, id_usuario, id_comentario} = newFavorite;
    
    const [result] = await pool.query(`
            INSERT INTO favoritos_comentarios(favorito,id_usuario,id_comentario)
            VALUES (?,?,?);
        `,
        [favorito,id_usuario, id_comentario]
    );

    console.log(result[0]);

    return {
        id:result.insertId,
        data: result
    };
}

export const  updateFavorite = async (id, favorite) => {
    const {favorito} = favorite;
    const result = await pool.query(`
            UPDATE favoritos_comentarios
            SET favorito = ?
            WHERE id = ?;
        `,
        [favorito, id]
    );
    return {
        message: "Favorito fue actualizado exitosamente",
        data: result
    };
}

export const  deleteFavorite = async (id) => {
    const favorite = await pool.query(`
            DELETE FROM favoritos_comentarios           
            WHERE id = ?;
        `,
        [id]
    );
    return favorite;
}