import express from 'express';
import { upload } from '../middlewares/upload.middleware.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { createBlogSchema } from '../schemas/blog.schema.js';


import {
  getBlogs,
  getBlog,
  addBlog,
  editBlog,
  removeBlog
} from '../controllers/blog.controller.js';

const router = express.Router();

router.get('/', getBlogs);
router.get('/:id', getBlog);
router.post('/',  upload.single('imagen'), validateSchema(createBlogSchema), addBlog);
router.put('/:id', upload.single('imagen'), editBlog);
router.delete('/:id', removeBlog);

export default router;