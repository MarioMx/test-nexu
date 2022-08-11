const express = require('express');
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.middlewares();
    this.routes();
  }

  routes() {
    this.app.use('/brands', require('../routes/brands'));
    this.app.use('/models', require('../routes/modelsCar'));
  }

  middlewares() {
    this.app.use(express.json());
  }

  listen() {
    global.server = this.app.listen(this.port, async () => {
      console.log('Escuchando puerto:', this.port);
    });
  }
}

module.exports = Server;
