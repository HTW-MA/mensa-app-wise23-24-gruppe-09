// mensaRoutes.js

const express = require('express');
const router = express.Router();
const mensaController = require('../controllers/mensaController');
const mealController = require("../controllers/mealController");
const additiveController = require("../controllers/additiveController");
const badgeController = require("../controllers/badgeController");
const menueController = require("../controllers/menueController");
const mealreviewController = require("../controllers/mealreviewController");
const canteenreviewController = require("../controllers/canteenreviewController");



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

// New route for fetching specific mensa information
router.get('/specific', async (req, res) => {
    try {
        console.log('Received request for /mensas/specific');
        const filters = req.query;
        const specificMensaInfo = await mensaController.fetchSpecificMensaInfo(filters);
        res.json(specificMensaInfo);
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
        const filters = req.query || {}; // Ensure filters is defined, default to an empty object
        const menue = await menueController.fetchMenue(filters);
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

// POST request
router.post('/mealreview', async (req, res) => {
    try {
        console.log('Received request for /mealreview (POST)');

        const mealreviewData = req.body;

        const createdMealreview = await mealreviewController.createMealreview(mealreviewData);

        res.status(201).json(createdMealreview); // 201 status code for successful resource creation
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.patch('/mealreview/:id', async (req, res) => {
    try {
        const mealReviewId = req.params.id;
        const updatedData = req.body;

        console.log(`Received request to update mealreview with ID: ${mealReviewId}`);

        // Call the controller function for updating a meal review
        const updatedMealreview = await mealreviewController.updateMealreview(mealReviewId, updatedData);

        res.json(updatedMealreview);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.delete('/mealreview/:id', async (req, res) => {
    try {
        const mealReviewId = req.params.id;

        console.log(`Received request to delete mealreview with ID: ${mealReviewId}`);

        // Call the controller function for deleting a meal review
        await mealreviewController.deleteMealreview(mealReviewId);

        res.status(204).send(); // 204 status code for successful resource deletion
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/canteenreview', async (req, res) => {
    try {
        console.log('Received request for /canteenreview');
        const canteenreview = await canteenreviewController.fetchCanteenreview();
        res.json(canteenreview);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// POST request
router.post('/canteenreview', async (req, res) => {
    try {
        console.log('Received request for /canteenreview (POST)');

        const canteenreviewData = req.body;

        const createdCanteenreview = await canteenreviewController.createCanteenreview(canteenreviewData);

        res.status(201).json(createdCanteenreview); // 201 status code for successful resource creation
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.patch('/canteenreview/:id', async (req, res) => {
    try {
        const canteenReviewId = req.params.id;
        const updatedData = req.body;

        console.log(`Received request to update canteenreview with ID: ${canteenReviewId}`);

        // Call the controller function for updating a meal review
        const updatedCanteenreview = await canteenreviewController.updateCanteenreview(canteenReviewId, updatedData);

        res.json(updatedCanteenreview);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.delete('/canteenreview/:id', async (req, res) => {
    try {
        const canteenReviewId = req.params.id;

        console.log(`Received request to delete canteenreview with ID: ${canteenReviewId}`);

        // Call the controller function for deleting a meal review
        await canteenreviewController.deleteCanteenreview(canteenReviewId);

        res.status(204).send(); // 204 status code for successful resource deletion
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;

