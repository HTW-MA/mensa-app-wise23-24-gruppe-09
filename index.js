// index.js

const express = require('express');
const https = require('https');
const fs = require('fs');

const cors = require('cors');
const app = express();
const port = 3001;


// Importiere die Route für "/mensas", "/meals" und "/additives"
const mensasRoute = require('./src/routes/mensaRoutes');
const mealsRoute = require('./src/routes/meal.routes');
const additivesRoute = require('./src/routes/additives.routes');

//Verwendung von CORS, damit das Frontend auf das Backend zugreifen kann
app.use(cors({
    origin: 'https://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // enable set cookie
    optionsSuccessStatus: 204,
}));
//Verwende JSON
app.use(express.json());
// Verwende die Routen
app.use('/', mensasRoute);
console.log('middleware fuer mensa genutzt');
/*app.use('/meals', mealsRoute);
console.log('middleware fuer meals genutzt');
app.use('/additives', additivesRoute);
console.log('middleware fuer additives genutzt');
*/

const privateKey = fs.readFileSync('server.key','utf8');
const certificate = fs.readFileSync('server.cert', 'utf8');
const credentials = { key: privateKey, cert: certificate };

const httpsServer = https.createServer(credentials, app);
httpsServer.listen(port, () => {
    console.log(`Server listening at https://localhost:${port}`);
});
