const BaseService = require("./base.service");  

class JobInformationService extends BaseService {
    constructor({ JobInformationBusiness }) {
        super(JobInformationBusiness);
    }
}
module.exports = JobInformationService;
