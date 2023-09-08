const configs = require("../../configs/enviroments");
const mapper = require("automapper-js");

class BaseController {
  constructor({ Service }) {
    this._service = Service;
  }

  async getAll(req, res) {
    try {
      let jobs = await this._service.getAll();
      return res.send({
        payload: jobs,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send({
        error: "Hubo un error al obtener los trabajos",
      });
    }
  }

  async get(req, res) {
    try {
      const { id } = req.params;
      let entity = await this._service.get(id);
      console.log(entity);
      return res.send({
        payload: entity,
      });
    } catch (error) {
      console.error(error);
      return res.status(404).send({ error: "No se encontro el id" });
    }
    // return res.send({
    //   payload: entity,
    // });

  }

  async create(req, res) {
    const { body } = req;
    const createdentity = await this._service.create(body);
    // const entity = mapper(entityDto, createdentity);
    return res.status(201).send({
      payload: createdentity,
    });
  }

  async update(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._service.update(id, body);
    return res.status(204).send();
  }

  async delete(req, res) {
    const { id } = req.params;
    await this._service.delete(id);
    return res.status(204).send();
  }
}

module.exports = BaseController;
