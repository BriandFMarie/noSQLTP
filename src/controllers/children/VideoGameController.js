// Imports
const router = require('express').Router();
const VideoGameService = require('../../services/VideoGameServices');

// Route to get all video games
router.get('/', (req, res) => {
    return VideoGameService.getAllVideoGames(req, res);
});

// Route to get one video game
router.get('/id/:videoGameId', (req, res) => {
    return VideoGameService.getVideoGame(req, res);
});

// Route to get video game with name
router.get('/name/:videoGameName', (req, res) => {
    return VideoGameService.getVideoGamesByName(req, res);
});

// Route to create a video game
router.post('/create', (req, res) => {
    return VideoGameService.createVideoGame(req, res);
});

// Route to update a video game
router.put('/update/:videoGameId', (req, res) => {
    return VideoGameService.updateVideoGame(req, res);
});

// Route to delete a video game
router.delete('/delete/:videoGameId', (req, res) => {
    return VideoGameService.deleteVideoGame(req, res);
});

// Exports
module.exports = router;
