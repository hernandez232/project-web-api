const HttpError = require('../errors/HttpError');
const PetService = require('../services/pet.service');

exports.newPet = async (req, res) => {
    const pet = await PetService.addPet({ ...req.body, userId: req.user.id });

    return res.status(201).json(pet);
};

exports.getPets = async (req, res) => {
    const pets = await PetService.getPets(req.user.id);

    return res.status(200).json(pets);
};

exports.getById = async (req, res) => {
    const pet = await PetService.getById(req.params.petId);

    if (pet === null) throw new HttpError('Pet not found', 404);

    return res.status(200).json(pet);
};

exports.updatePet = async (req, res) => {
    const pet = await PetService.updatePetInfo(
        req.body,
        req.params.petId,
    );

    return res.status(200).json(pet);
};

exports.deletePet = async (req, res) => {
    const deleted = await PetService.deletePet(req.params.petId);

    if (deleted === null) throw new HttpError('Pet not found', 404);

    return res.status(200).json();
};
