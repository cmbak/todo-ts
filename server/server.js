require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.SERVER_PORT;
const pool = require('./queries');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors(), express.json());

// Middleware
function logParams(req, res, next) {
    console.log('Params:');
    console.log(req.params);
    next();
}

// GET

// do i need async await? trycatch for pool.query?
app.get('/todos', async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM todo;');
        res.status(200).json(response.rows);
    } catch (error) {
        console.error(error.message);
    }
});

// Maybe try a different name for root? is this needed?
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

// DELETE
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

// PUT
app.put('/todos/:todoId', logParams, async (req, res) => {
    try {
        const todoId = Number(req.params.todoId);
        const { name, description } = req.body;
        const response = await pool.query(
            'UPDATE todo SET name = $1, description = $2 WHERE todo_id = $3',
            [name, description, todoId]
        );
        console.log(`Todo with id ${todoId} updated`);
    } catch (error) {
        console.error(`ERROR: ${error.message}`);
    }
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
