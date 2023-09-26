const BaseBusiness = require("./base.business");
const { Trabajo } = require("../models/");
const mapper = require("automapper-js");

// const {  } = require("../../services/scrapper/Scrapper.controller");

class JobBusiness extends BaseBusiness {
  constructor({ JobRepository}) {
    super(JobRepository, Trabajo);
    // this._scrapperController = ScrapperController;
    // this.last_update = null;
  }

  async getJobsFromScrapper() {
    if (this.last_update == null || Date.now() - this.last_update > 86400000) {
      this.last_update = Date.now();
      let createdJobs = [];
      // const jobs = await this._scrapperController.getJobs();
      console.log("jobs", jobs);
      // await this._entityRepository.deleteAll();

      for (const job of jobs) {
        let createdJob = await this._entityRepository.create(job);
        createdJobs.push(createdJob);
      }
      return createdJobs.map((entity) => mapper(this.entityToMap, entity));
    }
  }

  async getAll() {
    try {
      const entities = await this._entityRepository.getAll();

      return entities.map((entity) => mapper(this.entityToMap, entity));
    } catch (error) {
      console.error(error);
      return res.status(500).send({
        error: "Hubo un error al obtener los trabajos",
      });
    }
  }
  async create(entity) {
    entity = mapper(this.entityToMap, entity);
    delete entity.id;
    console.log(entity);
    const createdEntity = await this._entityRepository.create(entity);
    console.log(createdEntity);

    return mapper(this.entityToMap, createdEntity.toJSON());
  }
}

module.exports = JobBusiness;
