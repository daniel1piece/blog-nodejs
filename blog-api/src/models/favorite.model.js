import pool from '../config/database.js';

export const  getFavorites = () => {
    const [favorites] = pool.query(`
            SELECT * 
            FROM favoritos;
        `);
    return favorites;
}

export const  getFavorite = (id) => {
    const [favorites] = pool.query(`
            SELECT * 
            FROM favoritos
            WHERE id = ?;
        `,
        [id]
    );
    return favorites[0];
}

export const  createFavorite = (id, favorito, id_usuario, id_comentario) => {
    const favorite = pool.query(`
            INSERT INTO  
            favoritos(favorito, id_usuario, id_comentario)
            VALUES (?, ?, ?)
            WHERE id = ?;
        `,
        [favorito,id_usuario, id_comentario]
    );
    return favorite;
}

export const  updateFavorite = (id, favorito) => {
    const favorite = pool.query(`
            UPDATE favoritos
            SET favorito = ?
            WHERE id = ?;
        `,
        [favorito, id]
    );
    return favorite;
}