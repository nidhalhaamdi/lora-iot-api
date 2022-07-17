const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const api = require('./routes/api');

const app = express();

// Global Middlewares
app.use(cors({
    origin: '*'
}));

app.use(morgan('combined')); // a middleware for logging requests
app.use(express.json());

// API Router Middleware
app.use('/api', api);

module.exports = app;