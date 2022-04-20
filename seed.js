const Post = require('./models/post');
const User = require('./models/user');
const { sequelize } = require('./startup/database');

const users = [
    {
        username: 'John',
        password: 'password1234',
    },
    {
        username: 'David',
        password: 'password1234',
    }
]

const posts = [
    {
        title: 'Big Post',
        userId: 1
    },
    {
        title: 'The Post',
        userId: 1
    },
    {
        title: 'Big Post',
        userId: 2
    }
]

const seed = async () => {
    await sequelize.sync();

    users.map(async (user) => {
        await User.create({
            username: user.username,
            password: user.password,
        });
    })


    posts.map(async (post) => {
        await Post.create({
            title: post.title,
            userId: post.userId
        });
    })
}

seed();