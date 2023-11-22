const BaseService = require("./base.service"); 

class JobService extends BaseService {
    constructor({ JobBusiness }) {
        super(JobBusiness);
    }
 
    async getAll(filter={},page=1) {

        const entities = await this._entityBusiness.getAll(filter,page=page);
        return entities;
      }
    

}
module.exports = JobService;