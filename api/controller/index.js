// const BaseController  = require('./base.controller'); 

module.exports = {
    JobController: require('./job.controller'),
    MajorController: require('./major.controller'),
    UserController: require('./user.controller'),
    ApplicationController: require('./application.controller'),
    AuthController: require('./auth.controller'),
    CompanyController: require('./company.controller'),
    JobTypeController: require('./jobType.controller'),
    // MajorController: new BaseController( {MajorService }),
}