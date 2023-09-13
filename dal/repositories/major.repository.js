const BaseRepository = require("./base.repository");

class MajoRepository extends BaseRepository {

  constructor({db}) {
    super(db, "especialidades")
  }

}

module.exports = MajoRepository;