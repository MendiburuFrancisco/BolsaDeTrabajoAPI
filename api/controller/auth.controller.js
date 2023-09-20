const { LoginDto } = require("../dto");

class AuthController {
  constructor({ AuthService }) {
    //     // super(AuthService, LoginDto);
    this._service = AuthService;
    //     this.entityDto = LoginDTO;
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
      console.error(error);
      switch (error.message) {
        case "Usuario no encontrado":
          return res.status(404).send({ error: error.message });
        case "Contraseña incorrecta":
          return res.status(401).send({ error: error.message });

        default:
          return res
            .status(500)
            .send({ error: "Hubo un error al intentar loguearse" });
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
  }
  catch(error) {
    console.error(error);
    return res.status(500).send({ error: error.message });
    // switch (error.message) {
    //   case "Usuario no encontrado":
    //     return res.status(404).send({ error: error.message });
    //   case "Contraseña incorrecta":
    //     return res.status(401).send({ error: error.message });

    //   default:
    //     return res
    //       .status(500)
    //       .send({ error: "Hubo un error al intentar registrarse" });
    }
  }
  // }
}

module.exports = AuthController;
