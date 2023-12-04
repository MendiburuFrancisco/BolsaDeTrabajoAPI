const BaseBusiness = require("./base.business");

module.exports = {
    JobBusiness: require("./job.business"),
    JobInformationBusiness: require("./jobInformation.business"),
    MajorBusiness: require("./major.business"),
    UserBusiness: require("./user.business"),
    ApplicationBusiness: require("./application.business"),
    CompanyBusiness: require("./company.business"),
    JobTypeBusiness: require("./jobtype.business"),
    RolesBusiness : require('./roles.business')
    // UserBusiness: new BaseBusiness(  db,"usuarios"  ),
};
