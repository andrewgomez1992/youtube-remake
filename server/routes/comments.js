import express from 'express';
import { } from '../controllers/comment.js';
import { verifyToken } from '../verifyToken.js';
import { addComment, deleteComment, getComments } from '../controllers/comment.js';

const router = express.Router();

router.post('/', verifyToken, addComment)
router.post('/', verifyToken, deleteComment)
router.post('/', verifyToken, getComments)

export default router;
