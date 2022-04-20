const Sequelize = require('sequelize');

// https://www.youtube.com/watch?v=bqpgbTq8bbw
const sequelize = new Sequelize('express_app', 'root', 'docker_root', {
    // The `host` parameter is required for other databases
    // host: 'localhost'
    host: 'localhost',
    port: '8306',
    dialect: 'mysql'
});


const database = () => {
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
}




module.exports = {
    database,
    sequelize
};