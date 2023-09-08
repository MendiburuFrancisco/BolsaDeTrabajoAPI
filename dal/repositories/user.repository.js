const BaseRepository = require("./base.repository");

class UserRepository extends BaseRepository {

  constructor({db}) {
    // this._db = db;
    super(db, "User")
  }

 
}