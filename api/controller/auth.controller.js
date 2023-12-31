const { LoginDto } = require("../dto");

class AuthController {
  constructor({ AuthService }) {
    this._service = AuthService;
  }

  async createToken(next) {}

  async login(req, res) {
    try {
      const { body } = req;
      console.log(body);
      let Login = await this._service.login(body);
      return res.send({
        payload: Login,
      });
    } catch (error) {
      if (error?.status) {
        return res.status(error.status).send({
          error: error.message,
        });
      } else {
        return res.status(500).send({
          error: error.message,
        });
      }
    }
  }

  async register(req, res) {
    try {
      const { body } = req;
      let Login = await this._service.register(body);
      return res.send({
        payload: Login,
      });
    } catch (error) {
      if (error?.status) {
        return res.status(error.status).send({
          error: error.message,
        });
      } else {
        return res.status(500).send({
          error: error.message,
        });
      }
    }
  }

  async registerCompany(req, res) {
    try {
      const { body } = req;
      let Login = await this._service.registerCompany(body);
      return res.send({
        payload: Login,
      });
    } catch (error) {
      if (error?.status) {
        return res.status(error.status).send({
          error: error.message,
        });
      } else {
        return res.status(500).send({
          error: error.message,
        });
      }
    }
  }
}

module.exports = AuthController;
