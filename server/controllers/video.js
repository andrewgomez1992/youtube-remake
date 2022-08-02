import User from '../models/User.js';
import Video from '../models/Video.js';
import { createError } from '../error.js';

export const addVideo = async (req, res, next) => {
    const newVideo = new Video({ userId: req.user.id, ...req.body })
    try {
        const savedVideo = await newVideo.save()
        res.status(200).json(savedVideo)
    }
    catch (err) {
        next(err)
    }
}

export const updateVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id);
        if (!video) {
            return next(createError(404, 'Video not found!'))
        }
        if (req.user.id === video.userId) {
            const updatedVideo = await Video.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true })
            res.status(200).json(updatedVideo)
        } else {
            return next(createError(403, 'You can only update your video.'))
        }
    }
    catch (err) {
        next(err)
    }
}

export const deleteVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id);
        if (!video) {
            return next(createError(404, 'Video not found!'))
        }
        if (req.user.id === video.userId) {
            const updatedVideo = await Video.findByIdAndDelete(req.params.id)
            res.status(200).json(updatedVideo)
        } else {
            return next(createError(403, 'The video has been deleted.'))
        }
    }
    catch (err) {
        next(err)
    }
}

export const getVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        res.status(200).json(video)
    }
    catch (err) {
        next(err)
    }
}

export const addView = async (req, res, next) => {
    try {
        await Video.findByIdAndUpdate(req.params.id, {
            $inc: { views: 1 }
        })
        res.status(200).json('The view has been increased.')
    }
    catch (err) {
        next(err)
    }
}

export const random = async (req, res, next) => {
    try {
        const videos = await Video.aggregate([{ $sample: { size: 40 } }]); // MongoDB method to give 40 random videos
        res.status(200).json(videos)
    }
    catch (err) {
        next(err)
    }
}

export const trend = async (req, res, next) => {
    try {
        const videos = await Video.find().sort({ views: -1 })
        res.status(200).json(videos)
    }
    catch (err) {
        next(err)
    }
}

export const sub = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        const subscribedChannels = user.subscribedUsers;

        const list = await Promise.all(subscribedChannels.map(channelId => {
            return Video.find({ userId: channelId })
        })) // promise will find all videos of subscribed channel
        res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt)) // flat() will remove nested array from video preview return
    }
    catch (err) {
        next(err)
    }
}

export const getByTag = async (req, res, next) => {
    try {
        const videos = await Video.find().sort({ views: -1 })
        res.status(200).json(videos)
    }
    catch (err) {
        next(err)
    }
}

export const search = async (req, res, next) => {
    try {
        const videos = await Video.find().sort({ views: -1 })
        res.status(200).json(videos)
    }
    catch (err) {
        next(err)
    }
}