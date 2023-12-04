
const mapper = require("automapper-js");
const { JobType } = require("../dto");
const BaseController = require("./base.controller"); 
 

class JobTypeController extends BaseController {
  //  getJobTypes, getJobType, createJobType, updateJobType, deleteJobType
  constructor({ JobTypeService }) {
    super(JobTypeService, JobType);
    this._service = JobTypeService;
  }
  async create(req, res) {

    try {
        const {body} = req;
        console.log(body);
        let job = await this._service.create(body);
        return res.status(201).send({
            payload: job
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            error: 'Hubo un error al obtener los trabajos'
        });
    }
 
}

 
}

module.exports = JobTypeController;
