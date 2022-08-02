import express from 'express';
import { verifyToken } from '../verifyToken.js';
import { addVideo } from '../controllers/video.js';

const router = express.Router();

//create a video
router.post('/', verifyToken, addVideo)
router.put('/:id', verifyToken, addVideo)
router.delete('/:id', verifyToken, addVideo)
router.get('/find/:id', addVideo)

export default router;