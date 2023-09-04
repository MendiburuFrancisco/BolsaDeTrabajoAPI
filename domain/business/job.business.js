const BaseBusiness = require("./base.business");
const { Trabajos } = require("../../dal/models");

class JobBusiness extends BaseBusiness {
  constructor({ JobRepository }) {
    super(JobRepository, Trabajos);
  }
}

module.exports = JobBusiness;
