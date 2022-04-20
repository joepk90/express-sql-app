const express = require('express');
const { database } = require('./startup/database');
const routes = require('./startup/routes');

const app = express()
app.use(express.json());
const port = 3000


database();
routes(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


