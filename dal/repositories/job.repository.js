const BaseRepository = require("./base.repository");

class JobRepository extends BaseRepository {

  constructor({db}) {
    // this._db = db;
    super(db, "trabajos")
  }

    // async getAll() {
    //   // try {
    //     const elements = await this._db[this.model].findAll({ raw: true });
    //     console.log(elements);
    //     return elements;
    //   // } catch (err) {
    //   //   console.error(err);
    //   // }
    // }

   
    
}

module.exports = JobRepository;