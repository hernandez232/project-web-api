const { model, Schema } = require('mongoose');

const AppointmentSchema = new Schema({
    appointmentType: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    place: {
        type: String,
        required: true,
    },
    hour: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

module.exports = model('Appointment', AppointmentSchema);
