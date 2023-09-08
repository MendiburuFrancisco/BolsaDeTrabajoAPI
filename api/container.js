
const { asClass, createContainer, asFunction, asValue } = require("awilix") 

const Server = require('./server')
const StartUp = require("./startup")
const Routes = require("./routes/")

const { JobService, JobInformationService } = require('../services/database/');
const { JobController } = require('./controller/');
const { JobBusiness, JobInformationBusiness  }  = require('../domain/business/')
const { JobRepository, JobInformationRepository }  = require('../dal/repositories/')



const JobRoutes  = require("./routes/job.routes")

const container = createContainer();
const config = require("../configs/enviroments/")

const db = require('../dal/models')
const ScrapperController = require("../services/scrapper/Scrapper.controller");
// const db = require('../dal/models')



container
    .register({
        app: asClass(StartUp).singleton(),
        router: asFunction(Routes).singleton(),
        server: asClass(Server).singleton(),
        
        JobRoutes: asFunction(JobRoutes).singleton(),
        JobController: asClass(JobController).singleton(),

        ScrapperController: asClass(ScrapperController).singleton()
        
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
        JobService: asClass(JobService).singleton(),
        JobInformationService: asClass(JobInformationService).singleton()
        // ...
    })

    .register({
        JobRepository: asClass(JobRepository).singleton(),
        JobInformationRepository: asClass(JobInformationRepository).singleton()

        // ...
    })
    .register({
        JobBusiness: asClass(JobBusiness).singleton(),
        JobInformationBusiness: asClass(JobInformationBusiness).singleton()
        // ...
    })
 

module.exports = container;
 