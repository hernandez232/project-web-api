require('express-async-errors');
const router = require('express').Router();
const passport = require('passport');
const {
    createAppointment, getAppointment, getAll, updateAppointment, deleteAppointment,
} = require('../controllers/appointment.controller');

router.post('/:petId', passport.authenticate('jwt', { session: false }), createAppointment);

router.get('/:appointmentId', passport.authenticate('jwt', { session: false }), getAppointment);
router.get('/', passport.authenticate('jwt', { session: false }), getAll);

router.patch('/:appointmentId', passport.authenticate('jwt', { session: false }), updateAppointment);

router.delete('/:appointmentId', passport.authenticate('jwt', { session: false }), deleteAppointment);

module.exports = router;
