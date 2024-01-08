require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.SERVER_PORT;
const pool = require('./queries');

app.get('/', async (res, req) => {
    try {
        console.log('get!');
    } catch (error) {
        console.error(error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
