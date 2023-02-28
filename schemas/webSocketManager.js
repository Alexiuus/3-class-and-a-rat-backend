const { WebSocketServer } = require('ws');

class WebSocketManager {
  constructor() {
    this.webSockets = {};
    this.nextPort = 5001; // Puerto base
  }

  createWebSocket(id_game) {
    const port = this.nextPort;
    const webSocket = new WebSocketServer({ port });
    this.webSockets[id_game] = webSocket;
    this.nextPort++;
    console.log(`WebSocket creado en puerto ${port} para el juego ${id_game}`);
    return webSocket;
  }

  closeWebSocket(id_game) {
    const webSocket = this.webSockets[id_game];
    if (webSocket) {
      webSocket.close();
      delete this.webSockets[id_game];
      console.log(`WebSocket cerrado para el juego ${id_game}`);
    }
  }
}

module.exports = new WebSocketManager();