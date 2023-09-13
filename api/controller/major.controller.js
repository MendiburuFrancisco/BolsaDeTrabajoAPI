 
const mapper = require("automapper-js");
const { MajorDto } = require("../dto");
const BaseController = require("./base.controller");

 
class MajorController extends BaseController {
 
    constructor({ MajorService }) {
        super(MajorService,MajorDto)
        this._service = MajorService;
        this.entityDto = MajorDto;
    }
  
 



}

module.exports = MajorController;