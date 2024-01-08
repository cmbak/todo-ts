require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.SERVER_PORT;
const pool = require('./queries');

// GET routes

// do i need async await?
app.get('/todos', async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM todo;');
        res.status(200).json(response.rows);
    } catch (error) {
        console.error(error.message);
    }
});

app.get('/todos/:userId', async (req, res) => {
    try {
        const { user_id } = req.params;
        const response = await pool.query(
            'SELECT * FROM todo WHERE user_id = $1;',
            [user_id]
        );
        res.status(200).json(response.rows);
    } catch (error) {
        console.error(error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
