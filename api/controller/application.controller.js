 
const mapper = require("automapper-js");
const { ApplicationDto } = require("../dto");
const BaseController = require("./base.controller");

 
class ApplicationController extends BaseController {
    //  getApplications, getApplication, createApplication, updateApplication, deleteApplication
    constructor({ ApplicationService }) {
        super(ApplicationService,ApplicationDto)
        this._service = ApplicationService;
        this.entityDto = ApplicationDto;
    }
  


}

module.exports = ApplicationController;