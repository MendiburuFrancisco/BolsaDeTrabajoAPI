const  BaseRepository  = require("./base.repository");

let DB = (db) => {
  return db;
}

// module.exports = (db) => {
//   return {
//     JobRepository: require("./job.repository"),
//     JobInformationRepository: require("./jobInformation.repository"),
//     MajorRepository: require("./major.repository"),
//     // UserRepository: require("./user.repository"),
//     UserRepository: new BaseRepository(DB, "usuarios"),
//   };
// }

  
module.exports =  {
 
    JobRepository: require("./job.repository"),
    JobInformationRepository: require("./jobInformation.repository"),
    MajorRepository: require("./major.repository"),
    UserRepository: require("./user.repository"),
    // UserRepository: new BaseRepository(  DB,"usuarios"  ),
  };
 
