const BaseBusiness = require("./base.business");
const {TipoTrabajo} = require("../models");
const mapper = require("automapper-js");

 
class JobTypeBusiness extends BaseBusiness {
  constructor({ JobTypeRepository}) {
    super(JobTypeRepository,  TipoTrabajo);
    this.entityToMap = TipoTrabajo;
  
  }


  
  async create(entity) {
    // entity = mapper(this.entityToMap, {"tipo_trabajo":entity});
    delete entity.id;
    console.log(entity);
    const createdEntity = await this._entityRepository.create(entity);
    console.log(createdEntity);

    return mapper(this.entityToMap, createdEntity.toJSON());
  }

  async update(id, entity) {
    entity.id = id;
    // entity = mapper(this.entityToMap, entity);
    const updatedEntity = await this._entityRepository.update(id, entity);
    return mapper(this.entityToMap, updatedEntity);
  }
 


}

module.exports = JobTypeBusiness;
