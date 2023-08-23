const { Router } = require('express');
// const { getJobs, getJob, createJob, updateJob, deleteJob } = require('../controller/job.controller');

function JobRoutes({ JobController }) {
    const router = Router();

    router.get('/', JobController.getJobs);
    // router.get('/jobs/:id', getJob);
    // router.post('/jobs/create', createJob);
    // router.put('/jobs/:id', updateJob);
    // router.delete('/jobs/:id', deleteJob);

    return router;
}


module.exports  =  function( { JobController } ) {
    const router = Router();
    
    router.get('/', JobController.getJobs);
    // router.get('/jobs/:id', getJob);
    // router.post('/jobs/create', createJob);
    // router.put('/jobs/:id', updateJob);
    // router.delete('/jobs/:id', deleteJob);

    return router;
};

// module.exports = JobRoutes;