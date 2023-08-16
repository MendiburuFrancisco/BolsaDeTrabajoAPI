const express = require('express');


module.exports = function( { JobRoutes } ) {
    const router = express.Router();
    const apiRoute = express.Router();

    apiRoute
        .use(express.json())
        .use(express.urlencoded({ extended: true }))
    
        ;

    router.use('/', apiRoute);
    apiRoute.use('/jobs', JobRoutes);
    // /jobs
    

    return router;
}