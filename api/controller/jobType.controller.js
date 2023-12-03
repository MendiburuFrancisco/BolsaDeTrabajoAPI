
const mapper = require("automapper-js");
const { JobType } = require("../dto");
const BaseController = require("./base.controller"); 
 

class JobTypeController extends BaseController {
  //  getJobTypes, getJobType, createJobType, updateJobType, deleteJobType
  constructor({ JobTypeService }) {
    super(JobTypeService, JobType);
    this._service = JobTypeService;
  }
 

 
}

module.exports = JobTypeController;
