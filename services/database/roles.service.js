const BaseService = require("./base.service");  

class RolesService extends BaseService {
    constructor({ RolesBusiness }) {
        super(RolesBusiness);
    }
}
module.exports = RolesService;
