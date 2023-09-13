const BaseService = require("./base.service"); 

class ApplicationService extends BaseService {
    constructor({ ApplicationBusiness }) {
        super(ApplicationBusiness);
    }
 

}
module.exports = ApplicationService;