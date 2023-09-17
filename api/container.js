
const { asClass, createContainer, asFunction, asValue } = require("awilix") 

const Server = require('./server')
const StartUp = require("./startup")
const Routes = require("./routes/")

const { JobService, 
        JobInformationService, 
        MajorService, 
        UserService, 
        ApplicationService } = require('../services/database/');

const { JobController,
        MajorController, 
        UserController, 
        ApplicationController } = require('./controller/');

const   ScrapperController = require("../services/scrapper/Scrapper.controller");

const { JobBusiness, 
        JobInformationBusiness, 
        MajorBusiness, 
        UserBusiness,
        ApplicationBusiness  }  = require('../domain/business/')

const { JobRepository, 
        JobInformationRepository,
        MajorRepository, 
        UserRepository, 
        ApplicationRepository }  = require('../dal/repositories/')



const JobRoutes  = require("./routes/job.routes")

const container = createContainer();
const config = require("../configs/enviroments/")

const db = require('../dal/models')
// const db = require('../dal/models')



container
    .register({
        app: asClass(StartUp).singleton(),
        router: asFunction(Routes).singleton(),
        server: asClass(Server).singleton(),
        
        // JobRoutes: asFunction(JobRoutes).singleton(),

        JobController: asClass(JobController).singleton(),
        MajorController: asClass(MajorController).singleton(),
        UserController: asClass(UserController).singleton(),
        ApplicationController: asClass(ApplicationController).singleton(),
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
        JobInformationService: asClass(JobInformationService).singleton(),
        MajorService: asClass(MajorService).singleton(),
        UserService: asClass(UserService).singleton(),
        ApplicationService: asClass(ApplicationService).singleton(),
        // ...
    })

    .register({
        
        JobRepository: asClass(JobRepository).singleton(),
        JobInformationRepository: asClass(JobInformationRepository).singleton(),
        MajorRepository: asClass(MajorRepository).singleton(),
        UserRepository: asClass(UserRepository).singleton(),
        ApplicationRepository: asClass(ApplicationRepository).singleton(),
        
    })
    .register({
        JobBusiness: asClass(JobBusiness).singleton(),
        JobInformationBusiness: asClass(JobInformationBusiness).singleton(),
        MajorBusiness: asClass(MajorBusiness).singleton(),
        UserBusiness: asClass(UserBusiness).singleton(),
        ApplicationBusiness: asClass(ApplicationBusiness).singleton(),
        // ...
    })
 

module.exports = container;
 