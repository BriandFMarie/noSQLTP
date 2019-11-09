// Imports
const router = require('express').Router();
const UserService = require('../../services/UserServices');

// Route to get all users
router.get('/', (req, res) => {
    return UserService.getAllUsers(req, res);
});

// Route to get one user
router.get('/id/:userId', (req, res) => {
    return UserService.getUser(req, res);
});

// Route to get user with a firstName
router.get('/name/:userFirstName', (req, res) => {
    return UserService.getUsersByName(req, res);
});

// Route to create an user
router.post('/create', (req, res) => {
    return UserService.createUser(req, res);
});

// Route to update an user
router.put('/update/:userId', (req, res) => {
    return UserService.updateUser(req, res);
});

// Route to delete an user
router.delete('/delete/:userId', (req, res) => {
    return UserService.deleteUser(req, res);
});

// Exports
module.exports = router;
