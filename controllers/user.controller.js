const HttpError = require('../errors/HttpError');
const UserService = require('../services/user.service');

exports.register = async (req, res) => {
    const user = await UserService.createUser(req.body);

    return res.status(201).json(user);
};

exports.login = async (req, res) => {
    const user = await UserService.signIn(req.body);

    return res.status(200).json(user);
};

exports.getUserByName = async (req, res) => {
    const user = await UserService.findUser(req.query);
    const { username, id, email } = user;

    if (user === null) throw new HttpError('User not found', 404);

    return res.status(200).json({ id, username, email });
};

exports.getCurrent = async (req, res) => {
    const user = await UserService.getUser(req.params);
    const { username, id, email } = user;

    if (user === null) throw new HttpError('User not found', 404);

    return res.status(200).json({ id, username, email });
};

exports.getAll = async (req, res) => {
    const user = await UserService.getAll();

    return res.status(200).json(user);
};

exports.updateUser = async (req, res) => {
    const user = await UserService.updateUserInfo(
        req.body,
        req.params.userId,
    );

    if (user === null) throw new HttpError('User not found', 404);

    return res.status(200).json(user);
};

exports.deleteUser = async (req, res) => {
    const user = await UserService.removeUser(req.params.userId);

    if (user === null) throw new HttpError('User not found', 404);

    return res.status(200).json();
};
