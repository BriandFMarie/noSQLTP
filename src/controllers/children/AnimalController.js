// Imports
const router = require('express').Router();
const AnimalService = require('../../services/AnimalServices');

// Route to get all animals
router.get('/', (req, res) => {
    return AnimalService.getAllAnimals(req, res);
});

// Route to get one animal
router.get('/id/:animalId', (req, res) => {
    return AnimalService.getAnimal(req, res);
});

// Route to get animal with name
router.get('/name/:animalName', (req, res) => {
    return AnimalService.getAnimalByName(req, res);
});

// Route to get animal with breed
router.get('/breed/:animalBreed', (req, res) => {
    return AnimalService.getAnimalByBreed(req, res);
});

// Route to create a animal
router.post('/create', (req, res) => {
    return AnimalService.createAnimal(req, res);
});

// Route to update a animal
router.put('/update/:animalId', (req, res) => {
    return AnimalService.updateAnimal(req, res);
});

// Route to delete a video game
router.delete('/delete/:animalId', (req, res) => {
    return AnimalService.deleteAnimal(req, res);
});

// Exports
module.exports = router;
