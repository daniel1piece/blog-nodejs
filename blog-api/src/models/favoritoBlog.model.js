import pool from "../config/database.js";

export const getAllFavoritosBlogs = async () => {
    const [rows] = await pool.query(`
            SELECT * 
            FROM favoritos_blogs;
        `);
    return rows;
}

export const getFavoritoBlog = async ( id ) => {
    const [rows] = await pool.query(`
            SELECT * 
            FROM favoritos_blogs
            WHERE id = ?;
        `, [id]);
    return rows[0];
}

export const createFavoritoBlog = async ( favoritoBlog ) => {

    const { favorito, usuario_id, blog_id } = favoritoBlog;
    const [result] = await pool.query(`
             INSERT INTO favoritos_blogs(favorito, usuario_id, blog_id)
             VALUES(?, ?, ?);
        `,  [favorito, usuario_id, blog_id]);
    return result[0];
}

export const updateFavoritoBlog = async ( id, body ) => {
    const {favorito} = body;
    const [result] = await pool.query (`
            UPDATE favoritos_blogs
            SET favorito = ?
            WHERE id = ?;
        `, [favorito, id]); 
    return favorito[0];
}

export const deleteFavoritoBlog = async ( id ) =>{
    const info = await pool.query(`
            DELETE FROM favoritos_blogs
            WHERE id = ?;
        `, [id]);
    return info.affectedRows;
}