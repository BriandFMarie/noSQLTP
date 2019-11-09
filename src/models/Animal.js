const mongoose = require('mongoose');

const AnimalSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    color: {
        type: Array,
        required: false
    }
});

module.exports = mongoose.model("Animal", AnimalSchema);
