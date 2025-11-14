import express from 'express';
import path from 'path';

// const app = express();

export const registerStaticFiles = (app) => {
    app.use('/uploads/blogs', express.static(path.join(process.cwd(), 'uploads/blogs')));
}