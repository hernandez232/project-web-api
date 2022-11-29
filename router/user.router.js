require('express-async-errors');
const router = require('express').Router();
const passport = require('passport');
const {
    register, login, deleteUser, getCurrent, getUserByName, getAll, updateUser,
} = require('../controllers/user.controller');

router.post('/create', register);
router.post('/login', login);

router.patch('/:userId', passport.authenticate('jwt', { session: false }), updateUser);

router.get('/', passport.authenticate('jwt', { session: false }), getAll);
router.get('/search', passport.authenticate('jwt', { session: false }), getUserByName);
router.get('/:userId', passport.authenticate('jwt', { session: false }), getCurrent);

router.delete('/:userId', passport.authenticate('jwt', { session: false }), deleteUser);

module.exports = router;
