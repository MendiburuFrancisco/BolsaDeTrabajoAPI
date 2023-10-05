const configs = require("../../configs/enviroments");
const mapper = require("automapper-js");

class BaseController {
  constructor({ Service, entityDto }) {
    this._service = Service;
    this.entityDto = entityDto;
  }

  // paginar_entidad(entidad, pagina, cantidad) {
  //   const pagina_actual = pagina;
  //   const cantidad_por_pagina = cantidad;
  //   const indice_inicio = (pagina_actual - 1) * cantidad_por_pagina;
  //   const indice_final = pagina_actual * cantidad_por_pagina;
  //   const entidad_paginada = entidad.slice(indice_inicio, indice_final);
  //   return entidad_paginada;
  // }


  async getAll(req, res) {
    try {
      let items = await this._service.getAll();
      return res.send({
        payload: items,
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

    try{
      const { body } = req;
      const createdentity = await this._service.create(body);
      const entity = mapper(this.entityDto, createdentity);
      return res.status(201).send({
        payload: entity,
      });

    } catch(error){
      console.error(error);
      return res.status(500).send({
        error: "Hubo un error al crear el elemento",
      });
    }
  }

  async update(req, res) {
    
    const { body } = req;
    const { id } = req.params;

    delete body.id;
     
    await this._service.update(id, body);
    return res.status(202).send({
      payload: "Se actualizo correctamente",
    });
  }

  async delete(req, res) {
    const { id } = req.params;
    await this._service.delete(id);
    return res.status(202).send(
      {
        payload: "Se elimno correctamente",
      }
    );
  }
}

module.exports = BaseController;
