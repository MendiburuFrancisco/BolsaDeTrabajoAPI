const BaseRepository = require("./base.repository");

class UserRepository extends BaseRepository {

  constructor({db}) {
    super(db, "usuarios");
    this.entity = "usuarios";
    this._db = db;
  }

  async getByEmail(email) {
    return await this._db[this.entity].findOne({ where: { email } });
  }




 
}

module.exports = UserRepository;