const { model, Schema } = require('mongoose');

const PetSchema = new Schema({
    species: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    sex: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    race: {
        type: String,
        required: true,
    },
    hairColor: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    appointments: [{
        type: Schema.Types.ObjectId,
        ref: 'Appointment',
    }],
});

module.exports = model('Pet', PetSchema);
