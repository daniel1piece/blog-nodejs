import express from 'express';
import { upload } from '../middlewares/upload.middleware.js';
import {getBlogs, getBlog, addBlog, editBlog, removeBlog} from  '../controllers/blog.controller.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { createBlogSchema } from '../schemas/blog.schema.js';

const router = express.Router();

router.get('/', getBlogs);
router.get('/:id', getBlog);
// execution thread 1st upload(), then , after that addBlog
router.post('/',  upload.single('imagen'), validateSchema(createBlogSchema), addBlog);
router.put('/:id', upload.single('imagen'), editBlog);
router.delete('/:id', removeBlog);


export default router;