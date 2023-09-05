const BaseBusiness = require("./base.business");
const { Trabajo } = require("../models/");

class JobBusiness extends BaseBusiness {
  constructor({ JobRepository }) {
    super(JobRepository, Trabajo);
  }
}

module.exports = JobBusiness;
