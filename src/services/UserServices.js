// Imports
const User = require('../models/User');
const logger = require('../config/logger');

// To get all users
function getAllUsers(req, res) {
    User.find()
        .then(users => {
            return res.status(200).json({ success: true, result: users });
        })
        .catch(err => res.status(405).json({ success: false, message: err }));
}

// To get one user
function getUser(req, res) {
    User.findById(req.params.userId)
        .then(user => {
            if (!user || !user.length) {
                return res.status(404).json({ success: false, message: "User doesn't exist" });
            }
             return res.status(201).json({ success: true, result: user });
        })
        .catch(err => res.status(405).json({ success: false, message: err }));
}

// To get users with firstName
function getUsersByName(req, res) {
    User.find({ firstName: req.params.userFirstName })
        .then(user => {
            if (!user || !user.length) {
                return res.status(404).json({ success: false, message: "No user with this firstName" });
            }
            return res.status(201).json({ success: true, result: user });
        })
        .catch(err => res.status(405).json({ success: false, message: err }));
}

// To create an user
function createUser(req, res) {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        gender: req.body.gender,
        occupation: req.body.occupation,
        isPlayer: req.body.isPlayer
    });

    user.save()
        .then(newUser => {
            return res.status(201).json({ success: true, result: newUser });
        })
        .then(() => logger.info("New user is created"))
        .catch(err => res.status(405).json({ success: false, message: err }));
}

// To update an user
function updateUser(req, res) {
    User.findOneAndUpdate(req.params.userId, req.body, { new: true })
        .then(user => {
            if (!user) {
                return res.status(404).json({ success: false, message: "User doesn't exist" });
            }
            return res.status(201).json({ success: true, message: "User updated" });
        })
        .then(() => {
            return res.statusCode === 201 ? logger.info("User updated")
                : logger.info("User doesn't exist");
        })
        .catch(err => res.status(405).json({ success: false, message: err }));
}

// To delete an user
function deleteUser(req, res) {
    User.findByIdAndDelete(req.params.userId)
        .then(user => {
            if (!user) {
                return res.status(404).json({ success: false, message: "User doesn't exist" });
            }
            return res.status(201).json({ success: true, message: "User deleted" });
        })
        .then(() => {
            return res.statusCode === 201 ? logger.info("User deleted")
                : logger.info("User doesn't exist");
        })
        .catch(err => res.status(405).json({ success: false, message: err }));
}

// Exports
module.exports = { getAllUsers, getUser, getUsersByName, createUser, updateUser, deleteUser };
