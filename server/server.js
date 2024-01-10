require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.SERVER_PORT;
const pool = require('./queries');
const cors = require('cors');

app.use(cors());

// Middleware
function logParams(req, res, next) {
    console.log('Params:');
    console.log(req.params);
    next();
}

// GET routes

// do i need async await? trycatch for pool.query?
app.get('/todos', async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM todo;');
        res.status(200).json(response.rows);
    } catch (error) {
        console.error(error.message);
    }
});

app.get('/todos/:userId', logParams, async (req, res) => {
    try {
        const { userId } = req.params;
        const response = await pool.query(
            'SELECT * FROM todo WHERE user_id = $1;',
            [userId]
        );
        res.status(200).json(response.rows);
    } catch (error) {
        console.error(`ERROR: ${error.message}`);
    }
});

// DELETE routes
app.delete('/todos/:todoId', logParams, async (req, res) => {
    console.log('called');
    try {
        const { todoId } = req.params;

        const response = await pool.query(
            'DELETE FROM todo WHERE todo_id = $1;',
            [todoId]
        );
        // response.rowCount
    } catch (error) {
        console.error(`ERROR: ${error.message}`);
    }
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
