// const BaseController  = require('./base.controller'); 

module.exports = {
    JobController: require('./job.controller'),
    MajorController: require('./major.controller'),
    UserController: require('./user.controller'),
    ApplicationController: require('./application.controller'),
    AuthController: require('./auth.controller'),
    // MajorController: new BaseController( {MajorService }),
}