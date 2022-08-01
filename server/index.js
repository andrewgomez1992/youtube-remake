import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express()
dotenv.config()

const connect = () => {
    mongoose.connect(process.env.MONGO)
        .then(() => {
            console.log('Connected to Mongo!')
        })
        .catch(err => {
            console.log('Mongo DB not connected!')
        })
}

app.listen(9000, () => {
    connect()
    console.log('Connected to server!')
})