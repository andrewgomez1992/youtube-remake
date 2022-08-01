import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/users.js';
import videoRoutes from './routes/videos.js';
import commentRoutes from './routes/comments.js';
import authRoutes from './routes/auth.js';

const app = express()
dotenv.config()

const connect = () => {
    mongoose.connect(process.env.MONGO)
        .then(() => {
            console.log('Connected to MongoDB!')
        })
        .catch(err => {
            console.log('Mongo DB not connected!')
        })
}

app.use(express.json())
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/comments', commentRoutes);

app.listen(9000, () => {
    connect()
    console.log('Connected to server!')
})