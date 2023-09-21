const { LoginDto } = require("../dto");

class AuthController {
  constructor({ AuthService }) { 
    this._service = AuthService; 
  }


  async createToken(next) {
    
  }


  async login(req, res) {
    try {
      const { body } = req;
      let Login = await this._service.login(body);
      return res.send({
        payload: Login,
      });
    } catch (error) {
      return res.status(error.status).send({
        error: error.message,
      });
    }
  }

  async register(req, res) {
    try {
    const { body } = req;
    let Login = await this._service.register(body);
    return res.send({
      payload: Login,
    });
  }
  catch(error) {
   
    return res.status(500).send({ error: error.message });
 
    }
  }
  // }
}

module.exports = AuthController;
