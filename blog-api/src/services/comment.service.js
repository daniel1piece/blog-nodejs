import pool from "../config/database.js";

export const getCommentById = ( usuario_id ) => {
    console.log(usuario_id, "WHAT");
    
    const [rows] = pool.query(`SELECT usuario_id FROM comentarios WHERE usuario_id = ?;`, [usuario_id]);
    return rows[0];
}