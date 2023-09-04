
const { asClass, createContainer, asFunction, asValue } = require("awilix") 

const Server = require('./server')
const StartUp = require("./startup")
const Routes = require("./routes/")

const { JobService } = require('../services/database/');
const { JobController } = require('./controller/');
const JobRoutes  = require("./routes/job.routes")
const { JobBusiness }  = require('../domain/business/')
const { JobRepository }  = require('../dal/repositories/')


const container = createContainer();
const config = require("../configs/enviroments/")

const db = require('../dal/models')



container
    .register({
        app: asClass(StartUp).singleton(),
        router: asFunction(Routes).singleton(),
        server: asClass(Server).singleton(),
        
        JobRoutes: asFunction(JobRoutes).singleton(),
        JobController: asClass(JobController).singleton()
        
        // UserRoutes: asFunction(UserRoutes).singleton()
        // ...
    }) 
    .register({
        config: asValue(config)
    })
    .register({
        db: asValue(db)
    })
    .register({
        JobService: asClass(JobService).singleton()
        // UserService: asClass(UserService).singleton()
        // ...
    })

    .register({
        JobRepository: asClass(JobRepository).singleton()
        // UserRepository: asClass(UserRepository).singleton()
        // ...
    })
    .register({
        JobBusiness: asClass(JobBusiness).singleton()
        // UserBusiness: asClass(UserBusiness).singleton()
        // ...
    })
 

module.exports = container;
 