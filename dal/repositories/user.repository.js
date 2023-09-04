const BaseRepository = require("./base.repository");

class UserRepository extends BaseRepository {

  constructor({db}) {
    // this._db = db;
    super(db, "User")
  }

    // async getAll() {
    //     return await this._db.Job.findAll();
    // }

    // async create(job) {
    //     return await this._db.Job.create(job);
    // }
    
}