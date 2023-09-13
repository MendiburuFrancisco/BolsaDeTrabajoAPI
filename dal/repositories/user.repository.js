const BaseRepository = require("./base.repository");

class UserRepository extends BaseRepository {

  constructor({db}) {
    super(db, "usuarios")
  }

 
}

module.exports = UserRepository;