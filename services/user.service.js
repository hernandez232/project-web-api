const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require('../models/user.model');
const HttpError = require('../errors/HttpError');

exports.createUser = async ({
    username, password, email,
}) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new UserModel({
        username, password: hashedPassword, email,
    });

    await user.save();

    return user;
};

exports.signIn = async ({ email, password }) => {
    const user = await UserModel.findOne({ email });

    if (!user) throw new HttpError('User not found', 404);

    if (!(await bcrypt.compare(password, user.password))) throw new HttpError('Wrong credentials', 401);

    const token = jwt.sign({ id: user._id }, process.env.TOKEN_KEY);

    return { token };
};

exports.getAll = async () => UserModel.find();

exports.findUser = async ({ username }) => UserModel.findOne({ username });

exports.getUser = async ({ userId }) => {
    const user = await UserModel.findOne({ _id: userId });

    return user;
};

exports.updateUserInfo = async (updateBody, userId) => UserModel
    .findOneAndUpdate({ _id: userId }, {
        $set: {
            ...updateBody,
        },
    }, { new: true });

exports.removeUser = async ({ userId }) => UserModel.findOneAndDelete({ _id: userId });
