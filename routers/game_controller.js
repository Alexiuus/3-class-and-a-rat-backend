const express = require('express');
const gameServices = require('../crud/game_services');
const webSocketManager = require('../schemas/webSocketManager');
const routerGame = express.Router();

routerGame.post('/createGame', (req, res) => {
  const id_game = gameServices.id_game(req.body.username);
  try {
    const webSocket = webSocketManager.createWebSocket(id_game);
    res.json({ link: `localhost:${webSocket.options.port}/${id_game}` });
  } catch {
    console.log('Error');
  }
});

module.exports = routerGame;
