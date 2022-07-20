const express = require('express');

const {
    httpGetCurrents,
    httpSaveCurrent,
} = require('./current.controller');

const currentRouter = express.Router();


currentRouter.get('/', httpGetCurrents);
currentRouter.post('/', httpSaveCurrent);


module.exports = currentRouter;