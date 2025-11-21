import pool from "../config/database.js";

export const idUsuarioExists = async (id) => {
    const [rows] = await pool.query(
        'SELECT id FROM usuarios WHERE id = ?', [id]
    );

    // console.log("t2", rows[0]);
    return rows[0];
};

export const idBlogExists = async (id) => {
    const [rows] = await pool.query(
        'SELECT id FROM blogs WHERE id = ?', [id]
    );
    return rows[0];
}

export const favoriteBlogsIdExists = async (usuario_id, blog_id) => {
        const [rows] = await pool.query(
            'SELECT id FROM favoritos_blogs WHERE usuario_id = ? AND blog_id = ?',
            [usuario_id, blog_id]
        );

        return rows[0];
}