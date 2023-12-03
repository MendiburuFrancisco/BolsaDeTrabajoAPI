const BaseService = require("./base.service");  

class JobTypeService extends BaseService {
    constructor({ JobTypeBusiness }) {
        super(JobTypeBusiness);
    }
}
module.exports = JobTypeService;
