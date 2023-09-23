const CustomError = require('../../helpers/custom.error');

class BaseRepository {
  constructor(db, model) {
    this._db = db;
    this.model = model;
  }

  handlerError(error, mensaje) {
    switch (error) {
      case "SequelizeUniqueConstraintError":
      case "SequelizeValidationError":
      case "SequelizeInvalidArgumentError":
      case "SequelizeForeignKeyConstraintError":
        return CustomError.badRequest(mensaje);
      default:
        return CustomError.internalServer(mensaje);
    }
  }


  getAll() {
    return this._db[this.model].findAll({ raw: true });
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
