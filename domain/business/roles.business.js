const BaseBusiness = require("./base.business");
const {Roles} = require("../models");
const mapper = require("automapper-js");

 
class RolesBusiness extends BaseBusiness {
  constructor({ RolesRepository}) {
    super(RolesRepository,  Roles);
    this.entityToMap = Roles;
  
  }


  
  async create(entity) {
    delete entity.id;
    console.log(entity);
    const createdEntity = await this._entityRepository.create(entity);
    console.log(createdEntity);

    return mapper(this.entityToMap, createdEntity.toJSON());
  }

  async update(id, entity) {
    entity.id = id;
    const updatedEntity = await this._entityRepository.update(id, entity);
    return mapper(this.entityToMap, updatedEntity);
  }
 


}

module.exports = RolesBusiness;