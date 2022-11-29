const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

UserSchema.method('generateToken', function generateJwt() {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET);
});

UserSchema.method('validatePassword', async function validatePassword(password) {
    return bcrypt.compare(password, this.password);
});

module.exports = model('User', UserSchema);
