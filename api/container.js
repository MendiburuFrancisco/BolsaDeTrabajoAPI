
const { asClass, createContainer, asFunction, asValue } = require("awilix") 

const Server = require('./server')
const StartUp = require("./startup")
const Routes = require("./routes/")

const { JobService, 
        JobInformationService, 
        MajorService, 
        UserService, 
        ApplicationService,
        AuthService,
        CompanyService,
        JobTypeService,
        RolesService,
    } = require('../services/database/');

const { JobController,
        MajorController, 
        UserController, 
        ApplicationController,
        CompanyController,        
        AuthController,
        JobTypeController,
        RolesController,
     } = require('./controller/');

// const   ScrapperController = require("../services/scrapper/Scrapper.controller");

const { JobBusiness, 
        JobInformationBusiness, 
        MajorBusiness, 
        UserBusiness,
        CompanyBusiness,
        ApplicationBusiness,
        JobTypeBusiness,
        RolesBusiness,
      }  = require('../domain/business/')

const { JobRepository, 
        JobInformationRepository,
        MajorRepository, 
        UserRepository, 
        CompanyRepository,
        ApplicationRepository,
        JobTypeRepository,
        RolesRepository,
    }  = require('../dal/repositories/')



const AuthRoutes  = require("./routes/auth.routes")

const container = createContainer();
const config = require("../configs/enviroments/")

const db = require('../dal/models')
// const db = require('../dal/models')



container
    .register({
        app: asClass(StartUp).singleton(),
        router: asFunction(Routes).singleton(),
        server: asClass(Server).singleton(),
        
        AuthRoutes: asFunction(AuthRoutes).singleton(),

        JobController: asClass(JobController).singleton(),
        MajorController: asClass(MajorController).singleton(),
        UserController: asClass(UserController).singleton(),
        ApplicationController: asClass(ApplicationController).singleton(),
        // ScrapperController: asClass(ScrapperController).singleton(),
        AuthController: asClass(AuthController).singleton(),
        CompanyController: asClass(CompanyController).singleton(),
        JobTypeController: asClass(JobTypeController).singleton(),
        RolesController: asClass(RolesController).singleton(),
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
        AuthService: asClass(AuthService).singleton(),
        CompanyService: asClass(CompanyService).singleton(),
        JobTypeService: asClass(JobTypeService).singleton(),
        RolesService: asClass(RolesService).singleton(),
        // ...
    })

    .register({
        
        JobRepository: asClass(JobRepository).singleton(),
        JobInformationRepository: asClass(JobInformationRepository).singleton(),
        MajorRepository: asClass(MajorRepository).singleton(),
        UserRepository: asClass(UserRepository).singleton(),
        ApplicationRepository: asClass(ApplicationRepository).singleton(),
        CompanyRepository: asClass(CompanyRepository).singleton(),
        JobTypeRepository: asClass(JobTypeRepository).singleton(),
        RolesRepository: asClass(RolesRepository).singleton(),

    })
    .register({
        JobBusiness: asClass(JobBusiness).singleton(),
        JobInformationBusiness: asClass(JobInformationBusiness).singleton(),
        MajorBusiness: asClass(MajorBusiness).singleton(),
        UserBusiness: asClass(UserBusiness).singleton(),
        ApplicationBusiness: asClass(ApplicationBusiness).singleton(),
        CompanyBusiness: asClass(CompanyBusiness).singleton(),
        JobTypeBusiness: asClass(JobTypeBusiness).singleton(),
        RolesBusiness: asClass(RolesBusiness).singleton(),
        // ...
    })
 

module.exports = container;
 