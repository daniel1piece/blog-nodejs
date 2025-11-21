import pool from "../config/database.js";


export const getCommentById = async ( usuario_id ) => {   
    const [rows] = await pool.query(`SELECT comentario FROM comentarios WHERE usuario_id = ?;`, [usuario_id]);
    return rows[0] || null;
};

export const getUserById = async (usuario_id) => {
    const [user] = await pool.query('SELECT id FROM usuarios WHERE id = ?', [usuario_id]);
    return user[0] || null;
}