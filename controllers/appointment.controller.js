const HttpError = require('../errors/HttpError');
const AppointmentService = require('../services/appointment.service');

exports.createAppointment = async (req, res) => {
    const appointment = await AppointmentService.createAppointment({ ...req.body, ...req.params });

    return res.status(201).json(appointment);
};

exports.getAppointment = async (req, res) => {
    const appointment = await AppointmentService.getAppointment(req.params.appointmentId);

    return res.status(200).json(appointment);
};

exports.getAll = async (req, res) => {
    const appointment = await AppointmentService.getAll();

    return res.status(200).json(appointment);
};

exports.updateAppointment = async (req, res) => {
    const appointment = await AppointmentService.updateAppointment(
        req.body,
        req.params.appointmentId,
    );

    return res.status(200).json(appointment);
};

exports.deleteAppointment = async (req, res) => {
    const deleted = await AppointmentService.deleteAppointment(req.params.appointmentId);

    if (deleted === null) throw new HttpError('Appointment not found', 404);

    return res.status(200).json();
};
