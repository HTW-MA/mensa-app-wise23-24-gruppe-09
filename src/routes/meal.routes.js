// meal.routes.js

const express = require('express');
const router = express.Router();
const mealController = require('../controllers/mealController');

console.log('sind in der meal.routes.js');
router.get('/meals', async (req, res) => {
    try {
        console.log('Received request for /meals');
        const filters = req.query;
        const meals = await mealController.fetchMeals(filters);
        res.json(meals);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
