const express = require('express');
// const cors = require("cors")
// const compression = require('compression');


module.exports = function( { JobRoutes } ) {
    const router = express.Router();
    const apiRoute = express.Router();

    apiRoute
        // .use(cors())
        .use(express.json())
        .use(express.urlencoded({ extended: true }))
        // .use(compression)
        ;

    router.use('/', apiRoute);
    apiRoute.use('/jobs', JobRoutes);
    // /jobs
    
    

    return router;
}