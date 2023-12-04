const BaseRepository = require("./base.repository");

class RolesRepository extends BaseRepository {

  constructor({db}) {
    // this._db = db;
    super(db, "roles")
  }
 
    
}

module.exports = RolesRepository;