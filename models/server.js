const express = require('express');
const { dbConnection } = require('../db/config');
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.connectDB();
    this.middlewares();
    this.routes();
  }

  async connectDB() {
    await dbConnection();
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
