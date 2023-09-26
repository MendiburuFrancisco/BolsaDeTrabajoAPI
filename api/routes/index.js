const express = require('express');
const BaseRoutes  = require('./base.routes'); 
const morgan = require('morgan');
const sessionMiddleware = require('../middlewares/session'); 


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
    apiRoute.use('/auth',  AuthRoutes);
    
    // apiRoute.use('/', (req,res,next) => sessionMiddleware.verificarInicioSesion(req,res,next));
    
    // apiRoute.use('/jobs', (req,res,next) =>  sessionMiddleware.esAdmin(req,res,next));
    apiRoute.use('/jobs', new BaseRoutes({ Controller: JobController }).getRouter());
    
    apiRoute.use('/majors', new BaseRoutes({ Controller: MajorController }).getRouter());
    apiRoute.use('/users', new BaseRoutes({ Controller: UserController }).getRouter());
    apiRoute.use('/applications', new BaseRoutes({ Controller: ApplicationController }).getRouter());
 

    return router;
}