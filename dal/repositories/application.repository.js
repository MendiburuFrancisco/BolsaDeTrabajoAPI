const BaseRepository = require("./base.repository");

class ApplicationRepository extends BaseRepository {

  constructor({db}) {
    super(db, "postulaciones")
  }

}

module.exports = ApplicationRepository;