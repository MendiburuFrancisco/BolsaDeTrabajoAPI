
const { asClass, createContainer, asFunction, asValue } = require("awilix") 

const Server = require('./server')
const StartUp = require("./startup")

const config = require("../configs/enviroments/")
const Routes = require("./routes/")
const { JobController } = require('./controller/');
const JobRoutes  = require("./routes/job.routes")

const container = createContainer();

container
    .register({
        app: asClass(StartUp).singleton(),
        server: asClass(Server).singleton()
    })
    .register({
        JobController: asClass(JobController).singleton()
 
    })
    .register({
        router: asFunction(Routes).singleton()
    })
    .register({
        config: asValue(config)
    })
    .register({
        JobRoutes: asFunction(JobRoutes).singleton()
    })

module.exports = container;
 