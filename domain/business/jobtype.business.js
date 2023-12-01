const BaseBusiness = require("./base.business");
const { TipoTrabajo } = require("../models/");

class JobTypeBusiness extends BaseBusiness {
  constructor({ JobInformationRepository }) {
    super(JobInformationRepository, TipoTrabajo);
  }
}

module.exports = JobTypeBusiness;