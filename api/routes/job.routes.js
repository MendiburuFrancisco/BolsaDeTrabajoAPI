const { Router } = require('express');

module.exports  =  function( { JobController } ) {
    const router = Router();
    
    router.get('/', JobController.getAll.bind(JobController));
    // router.get('/jobs/:id', getJob);
    router.post('/create', JobController.create.bind(JobController));
    // router.put('/jobs/:id', updateJob);
    // router.delete('/jobs/:id', deleteJob);

    return router;
};

// module.exports = JobRoutes;