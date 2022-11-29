const joi = require('joi');

const UserValidator = {
    registerValidator: (data) => {
        const validateSchema = joi.object({
            username: joi.string()
                .min(5)
                .required(),
            email: joi.string()
                .required()
                .email(),
            password: joi.string()
                .min(4),
            confirmPassword: joi.ref('password'),
        })
            .with('password', 'confirmPassword');

        return validateSchema.validateAsync(data);
    },
};

module.exports = UserValidator;
