const CustomError = require("../../helpers/custom.error");

class BaseService {
  constructor(EntityBusiness) {
    this._entityBusiness = EntityBusiness;
  }

  handlerError(error, mensaje) {




    switch (error) {
      case "SequelizeUniqueConstraintError":
      case "SequelizeValidationError":
      case "SequelizeInvalidArgumentError":
        return CustomError.badRequest(mensaje);
      case "SequelizeForeignKeyConstraintError":
        return CustomError.badRequest("No existe el elemento de la tabla a la hace referencia");
      default:
        return CustomError.internalServer(mensaje);
    }
  }

  async getAll() {
    const entities = await this._entityBusiness.getAll();
    return entities;
  }

  async get(id) {
    const entity = await this._entityBusiness.get(id);
    return entity;
  }

  async create(entity) {
    try {
      const createdEntity = await this._entityBusiness.create(entity);
      return createdEntity;
    } catch (error) {
      if (error instanceof CustomError) throw error;
      if ( error?.errors[0]) throw this.handlerError(error.name, error.errors[0].message);
      throw this.handlerError(error.name, error.message);
    }
  }



  async update(id, entity) {
    try {
      const updatedEntity = await this._entityBusiness.update(id, entity);
      console.log(updatedEntity)
      return updatedEntity;
    } catch (error) {
      if (error instanceof CustomError) throw error;
      if (error?.parent?.sqlMessage) throw this.handlerError(error.name, error.parent.sqlMessage);
      if ( error?.errors[0]) throw this.handlerError(error.name, error.errors[0].message);
      
      throw this.handlerError(error.name, error.message);
    }
  }

  async delete(id) {
    const deletedEntity = await this._entityBusiness.delete(id);
    return deletedEntity;
  }
}

module.exports = BaseService;
