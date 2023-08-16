const { Router } = require('express');
const { getJobs, getJob, createJob, updateJob, deleteJob } = require('../controllers/job.controller');



module.exports  = function( { JobController } ) {
    const router = Router();
    
    router.get('/jobs', getJobs);
    router.get('/jobs/:id', getJob);
    router.post('/jobs/create', createJob);
    router.put('/jobs/:id', updateJob);
    router.delete('/jobs/:id', deleteJob);

};