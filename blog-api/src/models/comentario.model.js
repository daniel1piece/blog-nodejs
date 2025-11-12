import pool from '../config/database.js';

export const getAllComments = async () => {
    const [rows] = await pool.query(
        "SELECT * FROM comentarios;"
    );

    return rows;
}

export const getComment = async (id) => {
    const [rows] = await pool.query (
        "SELECT * FROM comentarios WHERE id = ?",
        [id]
    );
    return rows[0];
}

export const createComment = async (comment, blog_id) => {
    const [result] = await pool.query(
        'INSERT INTO comentarios(comentario, blog_id) values (?,?);',
        [comment, blog_id]
    );
    return {id: result.insertId, comment};
}