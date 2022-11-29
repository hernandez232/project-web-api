const AppointmentModel = require('../models/appointment.model');
const PetModel = require('../models/pet.model');

exports.createAppointment = async ({
    appointmentType, date, place, hour, description, petId,
}) => {
    const pet = await PetModel.findOne({ _id: petId });

    const appointment = new AppointmentModel({
        appointmentType, date, place, hour, description,
    });

    pet.appointments.push(appointment);

    await pet.save();
    await appointment.save();

    return appointment;
};

exports.getAppointment = (appointmentId) => AppointmentModel.findById({ _id: appointmentId });

exports.getAll = () => AppointmentModel.find();

exports.updateAppointment = async (updateBody, appointmentId) => AppointmentModel
    .findOneAndUpdate({ _id: appointmentId }, {
        $set: {
            ...updateBody,
        },
    }, { new: true });

exports.deleteAppointment = async (appointmentId) => AppointmentModel.findOneAndDelete(
    { _id: appointmentId },
);
