const BaseBusiness = require("./base.business");
const { Especialidad } = require("../models");
const mapper = require("automapper-js");

// const {  } = require("../../services/scrapper/Scrapper.controller");

class MajorBusiness extends BaseBusiness {
  constructor({ MajorRepository}) {
    super(MajorRepository, Especialidad);
    // this._scrapperController = ScrapperController;
    // this.last_update = null;
    this.entityToMap = Especialidad;
  
  }


  async getAll()
  {
    // if (this.last_update == null || (Date.now() - this.last_update) > 86400000){
    //   this.last_update = Date.now();
    //   let createdMajors = []
    //   const jobs = await this._scrapperController.getMajors();
    //   console.log("jobs",jobs);
    //     // await this._entityRepository.deleteAll();

    //   for (const job of jobs) {
    //     let createdMajor =  await this._entityRepository.create(job);
    //     createdMajors.push(createdMajor);
    //   }      
    //   return createdMajors.map(entity => mapper(this.entityToMap, entity));
    // }
      const entities = await this._entityRepository.getAll(); 
      return entities.map(entity => mapper(this.entityToMap, entity));
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
