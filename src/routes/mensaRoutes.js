// mensaRoutes.js

const express = require('express');
const router = express.Router();
const mensaController = require('../controllers/mensaController');
const mealController = require("../controllers/mealController");
const additiveController = require("../controllers/additiveController");
const badgeController = require("../controllers/badgeController");
const menueController = require("../controllers/menueController");
const mealreviewController = require("../controllers/mealreviewController");




console.log('sind in der mensaRoutes.js');
router.get('/', async (req, res) => {
    try {
        console.log('Received request for /mensas');
        const filters = req.query;
        const mensas = await mensaController.fetchMensas(filters);
        res.json(mensas);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

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

router.get('/additives', async (req, res) => {
    try {
        console.log('Received request for /additives');
        const additives = await additiveController.fetchAdditives();
        res.json(additives);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/badge', async (req, res) => {
    try {
        console.log('Received request for /badge');
        const badge = await badgeController.fetchBadges();
        res.json(badge);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/menue', async (req, res) => {
    try {
        console.log('Received request for /menue');
        const menue = await menueController.fetchMenue();
        res.json(menue);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/mealreview', async (req, res) => {
    try {
        console.log('Received request for /mealreview');
        const mealreview = await mealreviewController.fetchMealreview();
        res.json(mealreview);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;

