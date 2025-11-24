import express from 'express';
import { getAnswers, getAnswer, createAnswer, updateAnswer, deleteAnswer } from '../controllers/blog.answer.controller.js';
import { upload } from '../middlewares/upload.middleware.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { createBlogAnswerSchema } from '../schemas/blog.answer.schema.js';

const blogAnswerRoute = express.Router();

blogAnswerRoute.get('/', getAnswers);
blogAnswerRoute.get('/:id', getAnswer);
blogAnswerRoute.post('/', upload.none(), validateSchema(createBlogAnswerSchema), createAnswer);
blogAnswerRoute.put('/:id', updateAnswer);
blogAnswerRoute.delete('/:id', deleteAnswer);

export default blogAnswerRoute;
