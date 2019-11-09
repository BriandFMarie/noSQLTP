// Imports
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: false
    },
    occupation: {
        type: String,
        required: false
    },
    isPlayer: {
        type: Boolean,
        required: true
    }
});

// Exports
module.exports = mongoose.model("User", UserSchema);
