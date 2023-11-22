const BaseRepository = require("./base.repository");

class CompanyRepository extends BaseRepository {

  constructor({db}) {
    super(db, "empresas");
    this.entity = "empresas";
    this._db = db;
  }

  async getByEmail(email) {
    return await this._db[this.entity].findOne({ where: { email } });
  }

  
 
}

module.exports = CompanyRepository;