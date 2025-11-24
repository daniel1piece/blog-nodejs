import pool from '../config/database.js';

export const getAllAnswers = async () => {
    const [rows] = await pool.query(`
            SELECT * FROM answers_to_blog;
        `);

    return rows;
};

export const getAnswer = async ( id ) => {
    console.log(id);
    
    const [rows] = await pool.query(`
        SELECT * FROM answers_to_blog
        WHERE id = ${id};
    `);
    console.log(rows);
    return rows[0];
};

export const createAnswer = async (answerInfo) => {
    const result = await pool.query(`
        INSERT INTO answers_to_blog(answer, id_blog, id_user)
        VALUE ("${answerInfo.answer}", "${answerInfo.id_blog}", "${answerInfo.id_user}");
    `);

    return result;
};

export const updateAnswer = async (id, answerInfo) => {
    const result = await pool.query(`
        UPDATE answers_to_blog
        SET answer = "${answerInfo.answer}"
        WHERE id = "${id}";
    `);

    return result;
};

export const deleteAnswer = async ( id ) => {
    const result = await pool.query(`
        DELETE FROM answers_to_blog
        WHERE id = ${id};
    `);

    return result;
};