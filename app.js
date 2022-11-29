require('dotenv').config();
const debug = require('debug')('api:main');
const express = require('express');
const cors = require('cors');
const baseRouter = require('./router/base.router');

const app = express();

require('./config/db');
require('./config/passport');

app.use(express.json());
app.use(cors());

app.use('/api', baseRouter);

app.listen(process.env.PORT, () => {
    debug(`Listening at localhost: ${process.env.PORT}`);
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    const code = err.statusCode ? err.statusCode() : 400;
    return res.status(code).json({ message: err.message });
});
