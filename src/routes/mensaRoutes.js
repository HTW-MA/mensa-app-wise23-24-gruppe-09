// mensaRoutes.js

const express = require('express');
const router = express.Router();
const mensaController = require('../controllers/mensaController');


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

module.exports = router;
