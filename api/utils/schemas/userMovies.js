const joi = require('@hapi/joi');
const { movieIdSchema } = require('./movies');
const { userIdSchema } = require('./users');

const userMoviesIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const createUserMovieSchema = {
    userId: userIdSchema.required(),
    movieId: movieIdSchema.required(),
}

module.exports = {
    userMoviesIdSchema,
    createUserMovieSchema
};
