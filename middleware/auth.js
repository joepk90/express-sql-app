const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

// middleware
// https://www.youtube.com/watch?v=mbsmsi7l3r4
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token === null) return res.sendStatus(401)

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403) // token not valid

        req.user = user; // pass the user object to 
        next();

    })
}

module.exports = authenticateToken;