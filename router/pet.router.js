require('express-async-errors');
const router = require('express').Router();
const passport = require('passport');
const {
    newPet, getPets, updatePet, getById, deletePet,
} = require('../controllers/pet.controller');

router.post('/add', passport.authenticate('jwt', { session: false }), newPet);
router.patch('/:petId', passport.authenticate('jwt', { session: false }), updatePet);

router.get('/', passport.authenticate('jwt', { session: false }), getPets);
router.get('/:petId', passport.authenticate('jwt', { session: false }), getById);

router.delete('/:petId', passport.authenticate('jwt', { session: false }), deletePet);

module.exports = router;
