const mongoose = require('mongoose');

const VideoGameSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    genres: {
        type: Array,
        required: true
    },
    developer: {
        type: Array,
        required: true
    },
    editor: {
        type: Array,
        required: true
    },
    platform: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model("VideoGame", VideoGameSchema);
