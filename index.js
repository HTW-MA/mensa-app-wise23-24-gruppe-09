// index.js
const express = require('express');
const cors = require('cors');
const { queryDatabase } = require('./src/database/userDB');
const { registerUserService } = require('./src/service/userService');
const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());

// Import the routes
const mensasRoute = require('./src/routes/mensaRoutes');
const mealsRoute = require('./src/routes/meal.routes');
const additivesRoute = require('./src/routes/additives.routes');

// Enable CORS
app.use(cors({
    origin: 'https://mensaapp-44095cd41b36.herokuapp.com',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
}));

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const result = await registerUserService(username, email, password);
        res.json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Use the routes
app.use('/', mensasRoute);
// app.use('/meals', mealsRoute);
// app.use('/additives', additivesRoute);

app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
});
