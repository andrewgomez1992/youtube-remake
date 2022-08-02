import express from 'express';
import { } from '../controllers/video.js';
import { verifyToken } from '../verifyToken.js';
import { addVideo } from '../controllers/video.js';

const router = express.Router();

//create a video
router.post('/', verifyToken, addVideo)

export default router;