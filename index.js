// index.js

const express = require('express');
const app = express();
const port = 3001;

// Importiere die Route für "/mensas", "/meals" und "/additives"
const mensasRoute = require('./src/routes/mensaRoutes');
const mealsRoute = require('./src/routes/mealRoutes');
const additivesRoute = require('./src/routes/additiveRoutes');

// Verwende die Routen
app.use('/', mensasRoute);
console.log('middleware fuer mensa genutzt');
app.use('/meals', mealsRoute);
console.log('middleware fuer meals genutzt');
app.use('/additives', additivesRoute);
console.log('middleware fuer additives genutzt');
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
