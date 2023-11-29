const BaseBusiness = require("./base.business");
const { Postulacion } = require("../models");
const mapper = require("automapper-js");

class ApplicationBusiness extends BaseBusiness {
  constructor({ ApplicationRepository}) {
    super(ApplicationRepository, Postulacion);
 
    this.entityToMap = Postulacion;
  
  }

 

  async getAll(filter = {}, page = 1, limit = 10) {
    return await this._entityRepository.getAll(filter, page, limit);
  }

  async create(entity) {
    entity = mapper(this.entityToMap, entity);    
    const createdEntity = await this._entityRepository.create(entity);
    return mapper(this.entityToMap, createdEntity.toJSON());
  }


}

module.exports = ApplicationBusiness;
