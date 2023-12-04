
const mapper = require("automapper-js");
const { RolesDto } = require("../dto");
const BaseController = require("./base.controller"); 
 

class RolesController extends BaseController {
  constructor({ RolesService }) {
    super(RolesService, RolesDto);
    this._service = RolesService;
  }
  async create(req, res) {

    try {
        const {body} = req;
        console.log(body);
        let rol = await this._service.create(body);
        return res.status(201).send({
            payload: rol
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            error: 'Hubo un error al obtener los roles'
        });
    }
 
}

 
}

module.exports = RolesController;
