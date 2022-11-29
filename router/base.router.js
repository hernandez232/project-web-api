const router = require('express').Router();
const userRouter = require('./user.router');
const postRouter = require('./post.router');
const petRouter = require('./pet.router');
const appointmentRouter = require('./appointment.router');

router.use('/user', userRouter);
router.use('/post', postRouter);
router.use('/pet', petRouter);
router.use('/appointment', appointmentRouter);

module.exports = router;
