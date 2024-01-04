// additives.routes.js

const express = require('express');
const router = express.Router();
const additiveController = require('../controllers/additiveController');

console.log('sind in der additivesRoutes.js');
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

module.exports = router;
