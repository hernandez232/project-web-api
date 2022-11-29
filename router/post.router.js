require('express-async-errors');
const router = require('express').Router();
const passport = require('passport');
const {
    createPost, toggleLike, getPostById, getAllPost, addComment, deletePost,
} = require('../controllers/post.controller');

router.post('/create', passport.authenticate('jwt', { session: false }), createPost);

router.patch('/:postId/comment', passport.authenticate('jwt', { session: false }), addComment);
router.patch('/:postId/like', passport.authenticate('jwt', { session: false }), toggleLike);

router.get('/:postId', passport.authenticate('jwt', { session: false }), getPostById);
router.get('/', passport.authenticate('jwt', { session: false }), getAllPost);

router.delete('/:postId', passport.authenticate('jwt', { session: false }), deletePost);

module.exports = router;
