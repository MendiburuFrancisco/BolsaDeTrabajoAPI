const BaseBusiness = require("./base.business");
const { Especialidad } = require("../models");
const mapper = require("automapper-js");

 
class MajorBusiness extends BaseBusiness {
  constructor({ MajorRepository}) {
    super(MajorRepository, Especialidad);
    this.entityToMap = Especialidad;
  
  }


  
  async create(entity) {
    entity = mapper(this.entityToMap, entity);
    delete entity.id;
    const createdEntity = await this._entityRepository.create(entity);
    console.log(createdEntity);

    return mapper(this.entityToMap, createdEntity.toJSON());
  
  }
 


}

module.exports = MajorBusiness;
