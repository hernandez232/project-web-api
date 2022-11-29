const _ = require('lodash');
const PostModel = require('../models/post.model');

exports.createPost = async ({
    title, body, userId, petId,
}) => {
    const post = new PostModel({
        title, body, author: userId, pet: petId,
    });

    await post.save();
    await post.populate([{
        path: 'author',
        select: '_id username',
    }, {
        path: 'pet',
        select: 'name _id',
    }]);

    return post;
};

exports.addComment = async ({ body, petId, postId }) => {
    const post = await PostModel.findOne({ _id: postId });

    const comment = new PostModel({ body, author: petId });

    post.comments.push(comment);

    await post.save();
    await comment.populate({
        path: 'pet',
        select: 'name _id',
    });

    return post;
};

exports.toggleLike = async ({ postId, userId }) => {
    const post = await PostModel.findOne({ _id: postId });
    // eslint-disable-next-line eqeqeq
    const likeIndex = _.findIndex(post.likes, (like) => like == userId);

    if (likeIndex !== -1) {
        post.likes.splice(likeIndex, 1);
    } else {
        post.likes.push(userId);
    }

    await post.save();
    await post.populate([{
        path: 'author',
        select: 'username _id',
    }, {
        path: 'pet',
        select: 'name _id',
    }, {
        path: 'comments.author',
        select: 'username _id',
    }]);

    return {
        ...post.toObject(),
        likes: post.likes.length,
    };
};

exports.getPost = ({ postId }) => PostModel.findOne({ _id: postId }).populate('author likes');

exports.getAllPost = () => PostModel.find().populate('author likes');

exports.deletePost = async (postId) => PostModel.findOneAndDelete(
    { _id: postId },
);
