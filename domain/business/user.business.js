

const BaseBusiness = require("./base.business");
const   { Usuario }   = require("../models");

class UserBusiness extends BaseBusiness {
  constructor({ UserRepository }) {
    super(UserRepository, Usuario);
  }
}

module.exports = UserBusiness;
