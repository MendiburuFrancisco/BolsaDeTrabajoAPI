const express = require('express');
const cors = require('cors'); // Importa el paquete CORS

class Server {
  constructor({ config, router }) {
    this._config = config;
    this._express = express();
    this._express.use(cors()); // Usa el middleware CORS aquí
    this._express.use(router);
  }

  start() {
    return new Promise((resolve, reject) => {
      const http = this._express.listen(this._config.PORT, () => {
        const { port } = http.address();
        console.log(`API FRRO running on port ${port} 🚀`);
        resolve();
      });
    });
  }
}

module.exports = Server;