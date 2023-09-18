

const BaseBusiness = require("./base.business");
const   { Usuario }   = require("../models");

class UserBusiness extends BaseBusiness {
  constructor({ UserRepository }) {
    super(UserRepository, Usuario);
  }

  // async login(entity) {
  //   const user = await this._entityRepository.getLoginUser(entity);
  //   if (!user) return null;
  //   return user;

  // }

  async getByEmail(email) {
    return await this._entityRepository.getByEmail(email);
  }
  

}

module.exports = UserBusiness;
