const BaseRepository = require("./base.repository");

class JobTypeRepository extends BaseRepository {

  constructor({db}) {
    // this._db = db;
    super(db, "tipo_trabajo")
  }
 
    
}

module.exports = JobTypeRepository;