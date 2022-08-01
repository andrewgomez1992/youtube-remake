import mongoose from 'mongoose';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';

export const signup = async (req, res) => {
    // console.log(req.body)
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({ ...req.body, password: hash })
    }
    catch (err) {
        //todo
    }
}