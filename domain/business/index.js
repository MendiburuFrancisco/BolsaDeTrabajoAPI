const BaseBusiness = require("./base.business");

module.exports = {
    JobBusiness: require("./job.business"),
    JobInformationBusiness: require("./jobInformation.business"),
    MajorBusiness: require("./major.business"),
    UserBusiness: require("./user.business"),
    // UserBusiness: new BaseBusiness(  db,"usuarios"  ),
};
