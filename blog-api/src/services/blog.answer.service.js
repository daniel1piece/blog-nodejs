import pool from "../config/database.js";

export const userExist = async ( id_user ) => {
    const [user] = await pool.query(`
        SELECT * FROM usuarios
        WHERE id = "${id_user}";
    `);

    return user[0];
};


export const blogExist = async ( id_blog ) => {
    console.log(id_blog);
    
    const [blog] = await pool.query(`
        SELECT * FROM blogs
        WHERE id = "${id_blog}";    
    `);

    return blog[0];
}