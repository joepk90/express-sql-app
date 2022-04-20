const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
const User = require('../models/user');

const router = express.Router();

router.post('/:id', async (req, res) => {

    if (!req.body.username) {
        res.send('no username')
    }

    if (!req.body.password) {
        res.send('no password')
    }

    const user = await User.findAll({
        where: {
            id: req.params.id
        }
    });

    const isPasswordValid = await bcrypt.compare(req.body.password, user[0].password);

    if (!isPasswordValid) return res.send('password incorrect');

    const accessToken = await jwt.sign({
        id: user[0].id,
        username: user[0].username,
        // password: user[0].password
    }, JWT_SECRET);

    res.send({ accessToken: accessToken })

});

module.exports = router;
