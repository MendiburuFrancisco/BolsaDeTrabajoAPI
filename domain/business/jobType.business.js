const BaseBusiness = require("./base.business");
const { TipoTrabajo } = require("../models");
const mapper = require("automapper-js");

 
class JobTypeBusiness extends BaseBusiness {
  constructor({ JobTypeRepository}) {
    super(JobTypeRepository,  TipoTrabajo);
    this.entityToMap = TipoTrabajo;
  
  }


  
  async create(entity) {
    entity = mapper(this.entityToMap, entity);
    delete entity.id;
    const createdEntity = await this._entityRepository.create(entity);
    console.log(createdEntity);

    return mapper(this.entityToMap, createdEntity.toJSON());
  
  }
 


}

module.exports = JobTypeBusiness;
