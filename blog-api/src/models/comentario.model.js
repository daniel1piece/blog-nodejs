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

export const createComment = async (comment, user_id) => {
    const [result] = await pool.query(
        'INSERT INTO comentarios(comentario, usuario_id) VALUES (?,?);',
        [comment, user_id]
    );
    return {id: result.insertId, comment};
}


export const updateComment = async (comment_id, comment) => {
    const comentario = await pool.query(
        'UPDATE comentarios SET comentario = ? WHERE id = ?;',
        [comment, comment_id]
    );
    return { comentario };
}

export const deleteComment = async (id) => {
    const comentario = await pool.query(
        'DELETE FROM comentarios WHERE id = ?;',
        [id]
    );
    return comentario;
}