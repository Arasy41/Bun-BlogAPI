import express from 'express';

const router = express.Router();

import { createPost, readPost, readPosts, updatePost, deletePost } from '../controllers/postController';

router.post('/post', createPost);
router.get('/posts', readPosts);
router.get('/post/:id', readPost);
router.put('/post/:id', updatePost);
router.delete('/post/:id', deletePost);

export default router;