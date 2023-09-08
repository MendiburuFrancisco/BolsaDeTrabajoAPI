const BaseBusiness = require("./base.business");
const { InformacionTrabajos } = require("../models/");

class InformacionTrabajosBusiness extends BaseBusiness {
  constructor({ JobInformationRepository }) {
    super(JobInformationRepository, InformacionTrabajos);
  }
}

module.exports = InformacionTrabajosBusiness;
