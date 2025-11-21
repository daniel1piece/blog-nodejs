import pool from '../config/database.js';
import bcrypt  from 'bcrypt';

export const existUser = async (id) => {
  const [rows] = await pool.query('SELECT id FROM usuarios WHERE id = ?', [id]);
  return rows[0] || null;
};

export const getUserByEmail = async (email) => {
  const [rows] = await pool.query(`SELECT email from usuarios WHERE email = ?`, [email]);
  return rows[0] || null;
}

export const verifyPassword = async (email, password) => {
  const [rows] = await pool.query('SELECT * FROM usuarios WHERE email = ?', [email]);
  if (rows[0]) {                                   // position 1, index 0
    const isMatch = await bcrypt.compare(compare, rows[0].password);
    if (isMatch) {
      return {
        id: rows[0].id,
        email: rows[0].email,
        name: rows[0].nombre
      };
    }
    return null;
  }
  return null;
};