const HttpError = require('../errors/HttpError');
const PostService = require('../services/post.service');

exports.createPost = async (req, res) => {
    const post = await PostService.createPost({ ...req.body, userId: req.user.id });

    return res.status(201).json(post);
};

exports.addComment = async (req, res) => {
    const comment = await PostService.addComment({ ...req.body, ...req.params });

    return res.status(201).json(comment);
};

exports.toggleLike = async (req, res) => {
    const post = await PostService.toggleLike({
        postId: req.params.postId, userId: req.user.id,
    });

    return res.status(200).json(post);
};

exports.getPostById = async (req, res) => {
    const post = await PostService.getPost(req.params);

    return res.status(post ? 200 : 404).json(post || { message: 'Post not found' });
};

exports.getAllPost = async (req, res) => {
    const post = await PostService.getAllPost();

    return res.status(200).json(post);
};

exports.deletePost = async (req, res) => {
    const deleted = await PostService.deletePost(req.params.postId);

    if (deleted === null) throw new HttpError('Post not found', 404);

    return res.status(200).json();
};
