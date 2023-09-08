const { Router } = require('express');
const BaseRoutes  = require('./base.routes'); 

module.exports  =  function( { JobController } ) {
    // const router = Router();
    
//     router.get('/', JobController.getAll.bind(JobController));
//     router.post('/', JobController.create.bind(JobController));
//     // router.get('/jobs/:id', getJob);
//     // router.put('/jobs/:id', updateJob);
//     // router.delete('/jobs/:id', deleteJob);

    // return router;
    return new BaseRoutes({ Controller: JobController }). getRouter();
};

 