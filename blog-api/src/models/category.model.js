import pool from '../config/database.js';

export const getAllCategories = async() => {
    const [rows] = await pool.query('SELECT * FROM categorias;');
    return rows;
}

export const getCategoryById = async(id) => {
     const [rows] = await pool.query("SELECT * FROM categorias WHERE id = ?;", [id]);
     return rows[0];
} 