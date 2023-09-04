const BaseRepository = require("./base.repository");

class JobRepository extends BaseRepository {

  constructor({db}) {
    // this._db = db;
    super(db, "Job")
  }

    // async getAll() {
    //     return await this._db.Job.findAll();
    // }

    // async create(job) {
    //     return await this._db.Job.create(job);
    // }
    
}

module.exports = JobRepository;