const BaseBusiness = require("./base.business");
const { Postulacion } = require("../models");
const mapper = require("automapper-js");

class ApplicationBusiness extends BaseBusiness {
  constructor({ ApplicationRepository}) {
    super(ApplicationRepository, Postulacion);
 
    this.entityToMap = Postulacion;
  
  }

 
 


}

module.exports = ApplicationBusiness;
