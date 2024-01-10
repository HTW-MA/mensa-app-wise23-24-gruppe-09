// db.js

const { Pool } = require('pg');
const bcrypt = require('bcrypt')
const saltRounds = 10;


// Replace these with your actual database credentials
const pool = new Pool({
    user: 'mensaapp_user',
    host: 'localhost',
    database: 'mensa_user_db',
    password: 'Postpw',
    port: 5432, // Default PostgreSQL port
});

// Example function to query the database
const queryDatabase = async (queryString, params) => {
    try {
        const result = await pool.query(queryString, params);
        return result.rows;
    } catch (error) {
        console.error('Error executing query:', error);
        throw error;
    }
};

const registerUser = async (username, email, password) => {
    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Store the user details in the database
        const result = await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *', [username, email, hashedPassword]);

        return result.rows[0]; // Return the inserted user
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
};


module.exports = { queryDatabase, registerUser };
