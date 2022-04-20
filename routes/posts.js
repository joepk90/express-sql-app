const express = require('express');
const authenticateToken = require('../middleware/auth');
const Post = require('../models/post');

const router = express.Router();

router.get('/', async (req, res) => {

    const userIdUrlParam = req.query.userid

    let query = {}

    if (userIdUrlParam) {
        query = {
            where: {
                USERId: userIdUrlParam
            }
        }
    }

    const posts = await Post.findAll(query);

    res.send(posts);

})

router.get('/:id', authenticateToken, async (req, res) => {

    const posts = await Post.findAll({
        where: {
            id: req.params.id
        }
    });

    res.send(posts);

})

router.post('/', authenticateToken, async (req, res) => {

    const user = req.user // user returned in the authenticateToken middleware

    const post = await Post.create({
        title: req.body.title,
        userId: user.id
    });

    res.send(post);

});


module.exports = router;