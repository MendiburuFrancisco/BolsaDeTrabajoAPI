const BaseBusiness = require("./base.business");

module.exports = function(db){
    return {
        UserBusiness: new BaseBusiness(  db,"usuarios"  )
    }
};
