import pool from '../config/database.js';

export const idUsuarioExist  = async (idUsuario) => {
    const [rows] = await pool.query(`SELECT id FROM usuarios WHERE id = ?`, [idUsuario]);
    // console.log(rows, "t2");    
    return rows[0] || null;
}

export const idComentarioExist = async (idComentario) => {
    const [rows] = await pool.query('SELECT id FROM comentarios WHERE id = ?', idComentario);
    console.log(rows, "t4");
    return rows[0] || null;
}

export const idFavoriteExist = async (idUsuario, idComentario) => {
    const [rows] = await pool.query('SELECT id FROM favoritos_comentarios WHERE id_usuario = ? AND id_comentario = ?;', [idUsuario, idComentario]);
    console.log(rows[0],"t6");
    return rows[0] || null;
};


