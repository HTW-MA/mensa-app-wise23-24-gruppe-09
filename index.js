// index.js
//auswählen des Express frameworks
const express = require('express');
//auswählen des Internet Protokolls
//const https = require('https');
const fs = require('fs');


//sicherstellung von CORS funktionen, damit das frontend auf das backend zugreifen kann
const cors = require('cors');
const {queryDatabase} = require ('./src/database/userDB');
const { registerUserService } = require('./src/service/userService');
const app = express();
const port = 3001;
// Verwende JSON
app.use(express.json());

// Importiere die Route für "/mensas", "/meals" und "/additives"
const mensasRoute = require('./src/routes/mensaRoutes');
const mealsRoute = require('./src/routes/meal.routes');
const additivesRoute = require('./src/routes/additives.routes');

//Verwendung von CORS, damit das Frontend auf das Backend zugreifen kann
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // enable set cookie
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

/*const httpsServer = https.createServer(credentials, app);
httpsServer.listen(port, () => {
    console.log(`Server listening at https://localhost:${port}`);
});*/
const httpServer = app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

