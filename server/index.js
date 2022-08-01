import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/users.js';

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

app.use('/api/users', userRoutes)

app.listen(9000, () => {
    connect()
    console.log('Connected to server!')
})