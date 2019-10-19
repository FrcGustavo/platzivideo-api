const express = require('express');
const app = express();

// Dependencies
const morgan = require('morgan');
const helmet = require('helmet');

// Config and Routes
const { config } = require('./config/index');
const moviesApi = require('./routes/movies');
const userMoviesApi = require('./routes/userMovies');
const authApi = require('./routes/auth');

// Middlewares
const {
    logErrors,
    wrapErrors,
    errorHandler
} = require('./utils/middleware/errorHandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

// Helmet
app.use(helmet());

// body-parser by express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Morgan
app.use(morgan('dev'));

moviesApi(app);
userMoviesApi(app);
authApi(app);

// Catch 404
app.use(notFoundHandler);

// Errors Middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
    console.log(`Listening http:localhost:${config.port}`);
});
