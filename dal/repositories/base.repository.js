class BaseRepository {
    constructor(db, model) {
      this._db = db;
      this.model = model;
    }
  
    getAll() {
      return this._db[this.model].findAll();
    }
  
    get(id) {
      return this._db[this.model].findOne({ where: { id } });
    }
  
    create(model) {
      return this._db[this.model].create(model);
    }
  
    update(id, model) {
      delete model.createdAt;
      delete model.updatedAt;
      return this._db[this.model].update(model, { where: { id } });
    }
  
    delete(id) {
      return this._db[this.model].destroy({ where: { id } });
    }
  }
  
  module.exports = BaseRepository;
  