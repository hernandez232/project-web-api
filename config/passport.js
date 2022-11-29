const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const HttpError = require('../errors/HttpError');
const userModel = require('../models/user.model');

passport.use(
    new JwtStrategy(
        {
            secretOrKey: process.env.TOKEN_KEY,
            jwtFromRequest: ExtractJwt.fromExtractors([
                ExtractJwt.fromAuthHeaderAsBearerToken(),
            ]),
        },
        // eslint-disable-next-line consistent-return
        async (payload, done) => {
            try {
                const user = await userModel.findOne({ _id: payload.id });

                if (!user) throw new HttpError('User not found', 404);

                return done(null, user);
            } catch (err) {
                done(err);
            }
        },
    ),
);
