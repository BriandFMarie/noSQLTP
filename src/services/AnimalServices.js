// Imports
const Animal = require('../models/Animal');
const logger = require('../config/logger');

// To get all animals
function getAllAnimals(req, res) {
    Animal.find()
        .then(animals => {
            return res.status(200).json({ success: true, result: animals });
        })
        .catch(err => res.status(405).json({ success: false, message: err }));
}

// To get one animal
function getAnimal(req, res) {
    Animal.findById(req.params.animalId)
        .then(animal => {
            if (!animal || !animal.length) {
                return res.status(404).json({ success: false, message: "Animal doesn't exist" });
            }
            return res.status(201).json({ success: true, result: animal });
        })
        .catch(err => res.status(405).json({ success: false, message: err }));
}

// To get animals with name
function getAnimalByName(req, res) {
    Animal.find({ name: req.params.animalName })
        .then(animal => {
            if (!animal || !animal.length) {
                return res.status(404).json({ success: false, message: "No animal with this name" });
            }
            return res.status(201).json({ success: true, result: animal });
        })
        .catch(err => res.status(405).json({ success: false, message: err }));
}

// To get animals with breed
function getAnimalByBreed(req, res) {
    Animal.find({ breed: req.params.animalBreed })
        .then(animal => {
            if (!animal || !animal.length) {
                return res.status(404).json({ success: false, message: "No animal with this breed" });
            }
            return res.status(201).json({ success: true, result: animal });
        })
        .catch(err => res.status(405).json({ success: false, message: err }));
}

// To create an animal
function createAnimal(req, res) {
    const animal = new Animal({
        name: req.body.name,
        breed: req.body.breed,
        age: req.body.age,
        color: req.body.color
    });

    animal.save()
        .then(newAnimal => {
            return res.status(201).json({ success: true, result: newAnimal });
        })
        .then(() => logger.info("New animal is created"))
        .catch(err => res.status(405).json({ success: false, message: err }));
}

// To update an animal
function updateAnimal(req, res) {
    Animal.findOneAndUpdate(req.params.animalId, req.body, { new: true })
        .then(animal => {
            if (!animal) {
                return res.status(404).json({ success: false, message: "Animal doesn't exist" });
            }
            return res.status(201).json({ success: true, message: "Animal updated" });
        })
        .then(() => {
            return res.statusCode === 201 ? logger.info("Animal updated")
                : logger.info("Animal doesn't exist");
        })
        .catch(err => res.status(405).json({ success: false, message: err }));
}

// To delete an animal
function deleteAnimal(req, res) {
    Animal.findByIdAndDelete(req.params.animalId)
        .then(animal => {
            if (!animal) {
                return res.status(404).json({ success: false, message: "Animal doesn't exist" });
            }
            return res.status(201).json({ success: true, message: "Animal deleted" });
        })
        .then(() => {
            return res.statusCode === 201 ? logger.info("Animal deleted")
                : logger.info("Animal doesn't exist");
        })
        .catch(err => res.status(405).json({ success: false, message: err }));
}

// Exports
// eslint-disable-next-line max-len
module.exports = {
    // eslint-disable-next-line max-len
 getAllAnimals, getAnimal, getAnimalByName, getAnimalByBreed, createAnimal, updateAnimal, deleteAnimal
};
