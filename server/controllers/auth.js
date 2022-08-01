import mongoose from 'mongoose';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import { createError } from '../error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    // console.log(req.body)
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({ ...req.body, password: hash })

        await newUser.save()
        res.status(200).json('User has been created')
    }
    catch (err) {
        next(err)
    }
}

export const signin = async (req, res, next) => {
    // console.log(req.body)
    try {
        const user = await User.findOne({ name: req.body.name }) // findOne is a MONGODB Method!
        if (!user) {
            return next(createError(404, 'User Not Found!'))
        }
        const isCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isCorrect) {
            return next(createError(400, "Wrong Credentials!"))
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT) // Takes our id and creates a hash token
        const { password, ...others } = user._doc // Getting rid of password so it doesnt show upon request

        res.cookie('access_token', token, {
            httpOnly: true
        }).status(200).json(others)
    }
    catch (err) {
        next(err)
    }
}