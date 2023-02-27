const express = require('express');
const routerGame = express.Router();

routerGame.post('/createGame', (req, res) =>{
    // Creamos game utilizando el nombre del usuario dado en req.body.username .
    const link = 'lhhi2uhgiy3v1';
    res.json({'link': link})
})

module.exports = routerGame;
