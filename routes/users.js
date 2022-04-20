const express = require('express');
const bcrypt = require('bcrypt');

const authenticateToken = require('../middleware/auth');
const { SALT } = require('../config');
const Post = require('../models/post');
const User = require('../models/user');

const router = express.Router();

router.get('/', async (req, res) => {

    // const result = await db.promise().query(`SELECT * FROM USERS;`);

    const users = await User.findAll();

    res.send(users)
})


router.post('/', async (req, res) => {

    // https://www.youtube.com/watch?v=bqpgbTq8bbw
    // const result = db.promise().query(`INSERT INTO USERS VALUES('Joe', 'password')`);

    if (!req.body.username) {
        res.send('no username')
    }

    if (!req.body.password) {
        res.send('no password')
    }

    const salt = await bcrypt.genSalt(SALT);
    const password = await bcrypt.hash(req.body.password, salt);

    const user = await User.create({ username: req.body.username, password: password });

    res.send(user)

});

// sub query: see users posts
router.get('/posts/', authenticateToken, async (req, res) => {

    const user = req.user // user returned in the authenticateToken middleware

    const posts = await Post.findAll({
        where: {
            USERId: user.id
        }
    });

    res.send(posts);

});


module.exports = router;