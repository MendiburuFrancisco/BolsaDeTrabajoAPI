const BaseService = require("./base.service"); 

class ApplicationService extends BaseService {
    constructor({ ApplicationBusiness }) {
        super(ApplicationBusiness);
    }

    async getAll(filter,pagina) {
        return await this._entityBusiness.getAll(filter,pagina);
    }
 

}
module.exports = ApplicationService;