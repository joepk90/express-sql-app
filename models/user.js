const Sequelize = require('sequelize');
const { sequelize } = require('../startup/database');

const Model = Sequelize.Model;
class User extends Model { }
User.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING
        // allowNull defaults to true
    }
}, {
    sequelize,
    modelName: 'user'
    // options
});

module.exports = User;