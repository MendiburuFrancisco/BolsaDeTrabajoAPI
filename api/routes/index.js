const express = require('express');
const BaseRoutes  = require('./base.routes'); 

// const cors = require("cors")
// const compression = require('compression');


module.exports = function( { JobController } ) {
    const router = express.Router();
    const apiRoute = express.Router();

    apiRoute
        // .use(cors())
        .use(express.json())
        .use(express.urlencoded({ extended: true }))
        // .use(compression)
        ;

    router.use('/', apiRoute);
    // apiRoute.use('/jobs', JobRoutes);
    apiRoute.use('/jobs', new BaseRoutes({ Controller: JobController }).getRouter());
    // apiRoute.use('user')
    

    return router;
}