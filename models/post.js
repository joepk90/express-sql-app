const Sequelize = require('sequelize');
const { sequelize } = require('../startup/database');
const User = require('../models/user');

const Model = Sequelize.Model;
class Post extends Model { }
Post.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: Sequelize.STRING,
    },
}, {
    sequelize,
    modelName: 'post'
});

Post.belongsTo(User);


module.exports = Post;