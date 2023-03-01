const webSocketManager = require('./schemas/webSocketManager');
const routerGame = require('./routers/game_controller');
const express = require('express');
const cors = require('cors');
const http = require('http');
const app = express();
const port = 5000;
const expressWs = require('express-ws');

const httpServer = http.createServer(app);

const corsOptions = {
    origin: 'http://localhost:3000', // sólo se aceptarán peticiones de este dominio
    credentials: true, // permite enviar y recibir cookies desde el cliente
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'], // permite estos métodos HTTP
    allowedHeaders: ['Content-Type', 'Authorization'] // permite estos encabezados personalizados
  };
  
app.use(cors(corsOptions));

httpServer.listen(port, () => {
    console.log('Server on port 5000');
});

expressWs(app, httpServer);

app.ws('/:id_game/:username', async function(ws, req) {
    const id_game = req.params.id_game;
    const username = req.params.username;
    const webSocketIdGame = webSocketManager.getWebSocket(id_game);
    if (webSocketIdGame.users.indexOf(username) === -1) webSocketIdGame.users.push(username);
    console.log(webSocketIdGame.users);
    webSocketManager.setWebSocket(id_game, webSocketIdGame);
    ws.send(JSON.stringify({ users: webSocketIdGame.users}));

});


app.use(express.json());
app.use('/game', routerGame);


