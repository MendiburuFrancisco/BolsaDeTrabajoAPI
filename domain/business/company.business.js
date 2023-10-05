const mapper = require("automapper-js");
const BaseBusiness = require("./base.business");
const   { Empresa ,AuthLogin }   = require("../models");
const CustomError = require('../../helpers/custom.error');

class CompanyBusiness extends BaseBusiness {
  constructor({ CompanyRepository }) {
    super(CompanyRepository, Empresa);
    this.AuthLogin = AuthLogin;
  }

  // async login(entity) {
  //   const user = await this._entityRepository.getLoginCompany(entity);
  //   if (!user) return null;
  //   return user;

  // }

  async getByEmail(email) {

    const entity =  await this._entityRepository.getByEmail(email);
    if (!entity) return null;
    return mapper(this.entityToMap, entity.toJSON());

  }

  validateAuthLogin(data) {
    const entity = new this.AuthLogin(data);
    const { valid, errors } = entity.validate(); // Validar la instancia
    if (!valid) {
      const errorMessages = errors.map(error => error.message.replace(/"/g, ""));
      throw CustomError.badRequest(errorMessages);
    }
  }


  validate(entity) {
    const { valid, errors } = entity.validate(); // Validar la instancia
    if (!valid) {
      const errorMessages = errors.map(error => error.message.replace(/"/g, ""));
      throw CustomError.badRequest(errorMessages);
    }
  }

  async update(id, entity) {
    entity.id = id;
    // entity = mapper(this.entityToMap, entity);
    const usuario = new Empresa(entity);
    this.validate(usuario);
    const updatedEntity = await this._entityRepository.update(id, usuario.toJSON());
    return mapper(this.entityToMap, updatedEntity);
  }


  async create(entity) {
    delete entity.id;
    const empresa = new Empresa(entity); // Crear una instancia de la clase Usuario
    this.validate(empresa); // Validar la instancia
    const createdEntity = await this._entityRepository.create(empresa.toJSON()); 
    return mapper(this.entityToMap, createdEntity.toJSON());
  }
  

}

module.exports = CompanyBusiness;
