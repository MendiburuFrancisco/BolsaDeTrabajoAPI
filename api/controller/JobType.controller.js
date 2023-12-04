 
const mapper = require("automapper-js");
const { JobTypeDto } = require("../dto");
const BaseController = require("./base.controller");

 
class JobTypeController extends BaseController {
 
    constructor({ JobTypeService }) {
        super(JobTypeService,JobTypeDto)
        this._service = JobTypeService;
        this.entityDto = JobTypeDto;
    }
  
 



}

module.exports = JobTypeController;