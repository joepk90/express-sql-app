const express = require('express');

const auth = require('../routes/auth');
const users = require('../routes/users');
const posts = require('../routes/posts');
const error = require('../middleware/error');

module.exports = function (app) {

    app.use(express.json());

    // routes
    app.use('/auth', auth);
    app.use('/users', users);
    app.use('/posts', posts);


    // error handler - must be registered after the routes
    app.use(error);

}