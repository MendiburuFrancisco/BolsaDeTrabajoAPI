const BaseRepository = require("./base.repository");

class JobTypeRepository extends BaseRepository {

  constructor({db}) {
    super(db, "tipo_trabajo");
    this.entity = "tipo_trabajo";
    this._db = db;
  }

 
}

module.exports = JobTypeRepository;