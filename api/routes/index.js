const express = require('express');
const BaseRoutes  = require('./base.routes'); 
const morgan = require('morgan');
// const cors = require("cors")
// const compression = require('compression');


module.exports = function( { JobController,MajorController,UserController,ApplicationController, AuthRoutes } ) {
    const router = express.Router();
    const apiRoute = express.Router();

    apiRoute
        // .use(cors())
        .use(express.json())
        .use(express.urlencoded({ extended: true }))
        // .use(compression)
        ;
    
    router.use(morgan("dev"));

    router.use('/', apiRoute);
    // apiRoute.use('/jobs', JobRoutes);
    apiRoute.use('/auth',  AuthRoutes);
    apiRoute.use('/jobs', new BaseRoutes({ Controller: JobController }).getRouter());
    apiRoute.use('/majors', new BaseRoutes({ Controller: MajorController }).getRouter());
    apiRoute.use('/users', new BaseRoutes({ Controller: UserController }).getRouter());
    apiRoute.use('/applications', new BaseRoutes({ Controller: ApplicationController }).getRouter());
    // apiRoute.use('/auth',  router.post("/",AuthLoginController.login.bind(AuthLoginController) ));
    

    return router;
}