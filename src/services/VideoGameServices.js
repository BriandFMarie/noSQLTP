// Imports
const VideoGame = require('../models/VideoGame');
const logger = require('../config/logger');

// To get all video games
function getAllVideoGames(req, res) {
    VideoGame.find()
        .then(videoGames => {
            return res.status(200).json({ success: true, result: videoGames });
        })
        .catch(err => res.status(405).json({ success: false, message: err }));
}

// To get one video game
function getVideoGame(req, res) {
    VideoGame.findById(req.params.videoGameId)
        .then(videoGame => {
            if (!videoGame || !videoGame.length) {
                return res.status(404).json({ success: false, message: "Video Game doesn't exist" });
            }
            return res.status(201).json({ success: true, result: videoGame });
        })
        .catch(err => res.status(405).json({ success: false, message: err }));
}

// To get video game with name
function getVideoGamesByName(req, res) {
    VideoGame.find({ name: req.params.videoGameName })
        .then(videoGame => {
            if (!videoGame || !videoGame.length) {
                return res.status(404).json({ success: false, message: "No video game with this name" });
            }
            return res.status(201).json({ success: true, result: videoGame });
        })
        .catch(err => res.status(405).json({ success: false, message: err }));
}

// To create a video game
function createVideoGame(req, res) {
    const videoGame = new VideoGame({
        name: req.body.name,
        description: req.body.description,
        genres: req.body.genres,
        gender: req.body.gender,
        developer: req.body.developer,
        editor: req.body.editor,
        platform: req.body.platform
    });

    videoGame.save()
        .then(newVideoGame => {
            return res.status(201).json({ success: true, result: newVideoGame });
        })
        .then(() => logger.info("New Video Game is created"))
        .catch(err => res.status(405).json({ success: false, message: err }));
}

// To update a video game
function updateVideoGame(req, res) {
    VideoGame.findByIdAndUpdate(req.params.videoGameId)
        .then(videoGame => {
            if (!videoGame || !videoGame.length) {
                return res.status(404).json({ success: false, message: "Video Game doesn't exist" });
            }
            return res.status(201).json({ success: true, message: "Video Game updated" });
        })
        .then(() => logger.info("Video Game updated"))
        .catch(err => res.status(405).json({ success: false, message: err }));
}

// To delete a video game
function deleteVideoGame(req, res) {
    VideoGame.findByIdAndDelete(req.params.videoGameId)
        .then(videoGame => {
            if (!videoGame || !videoGame.length) {
                return res.status(404).json({ success: false, message: "Video Game doesn't exist" });
            }
            return res.status(201).json({ success: true, message: "Video Game deleted" });
        })
        .then(() => logger.info("Video Game deleted"))
        .catch(err => res.status(405).json({ success: false, message: err }));
}

// Exports
module.exports = { getAllVideoGames, getVideoGame, getVideoGamesByName, createVideoGame, updateVideoGame, deleteVideoGame };
