const BaseRepository = require("./base.repository");

class JobInformationRepository extends BaseRepository {

  constructor({db}) {
    // this._db = db;
    super(db, "informacion_trabajos")
  }
 
    
}

module.exports = JobInformationRepository;