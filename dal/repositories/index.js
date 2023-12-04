const BaseRepository = require("./base.repository");

module.exports =  {
 
    JobRepository: require("./job.repository"),
    JobInformationRepository: require("./jobInformation.repository"),
    MajorRepository: require("./major.repository"),
    UserRepository: require("./user.repository"),
    ApplicationRepository: require("./application.repository"),
    CompanyRepository: require("./company.repository"),
    JobTypeRepository: require("./jobType.repository"),
    RolesRepository: require("./roles.repository"),
    // UserRepository: new BaseRepository(  DB,"usuarios"  ),
  };
 
