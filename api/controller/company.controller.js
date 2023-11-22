const mapper = require("automapper-js");
const { CompanyDto } = require("../dto");
const BaseController = require("./base.controller");

class CompanyController extends BaseController {
  //  getCompanys, getCompany, createCompany, updateCompany, deleteCompany
  constructor({ CompanyService }) {
    super(CompanyService, CompanyDto);
    this._service = CompanyService;
  }


  async create(req, res) {
      return res.status(403).send({
          error: "No se puede crear un usuario desde esta ruta",
      });
  }


  async update(req, res) {
    try {
      const { body } = req;
      const { id } = req.params;

      delete body.id;

      await this._service.update(id, body);
      return res.status(202).send({
        payload: "Se actualizo correctamente",
      });
    } catch (error) {
      return res.status(error.status).send({
        error: error.message,
      });
    }
  }


}

module.exports = CompanyController;
