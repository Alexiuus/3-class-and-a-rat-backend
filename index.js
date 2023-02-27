const express = require('express');
const routerGame = require('./routers/game_controller')
const app = express();
const port = 5000;

app.use(express.json());
app.use('/game', routerGame);

app.listen(port, () => {
    console.log('Server on port 5000');
})