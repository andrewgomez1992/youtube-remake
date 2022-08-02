import User from '../models/User.js';
import Video from '../models/Video.js';
import { createError } from '../error.js';

export const addVideo = async (req, res, next) => {
    const newVideo = new Video({ userId: req.user.id, ...req.body })
    try {
        const savedVideo = await new Video.save()
        res.status(200).json(savedVideo)
    }
    catch (err) {
        next(err)
    }
}

export const updateVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
    }
    catch (err) {
        next(err)
    }
}

export const deleteVideo = async (req, res, next) => {
    try {

    }
    catch (err) {
        next(err)
    }
}

export const getVideo = async (req, res, next) => {
    try {

    }
    catch (err) {
        next(err)
    }
}