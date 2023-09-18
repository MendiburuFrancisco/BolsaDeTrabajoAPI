 
const { RegisterDto } = require("../dto");
 
 

class AuthRegisterController {
  constructor({ AuthRegisterService }) {
    super(AuthRegisterService, RegisterDto);
    this._service = AuthRegisterService;
  }

    //  async register(req, res) {
    // } 
  
}

module.exports = AuthRegisterController;
