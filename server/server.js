require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.SERVER_PORT;
const pool = require('./queries');

// do i need async await?
app.get('/', async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM todo, todo_user;');
        res.status(200).json(response.rows);
    } catch (error) {
        console.error(error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
