const PetModel = require('../models/pet.model');

exports.addPet = async ({
    species, name, sex, age, race, hairColor, weight, userId,
}) => {
    const pet = new PetModel({
        species, name, sex, age, race, hairColor, weight, owner: userId,
    });

    await pet.save();

    return pet;
};

exports.getPets = (userId) => PetModel.find({ ownner: userId });

exports.getById = (petId) => PetModel.findById({ _id: petId });

exports.updatePetInfo = async (updateBody, petId) => PetModel
    .findOneAndUpdate({ _id: petId }, {
        $set: {
            ...updateBody,
        },
    }, { new: true });

exports.deletePet = async (petId) => PetModel.findOneAndDelete(
    { _id: petId },
);
