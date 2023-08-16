class JobController {
    //  getJobs, getJob, createJob, updateJob, deleteJob
    sayHello(req, res) {
        res.send("Hello World");
    }

    getJobs(req, res) {
        res.send("Get All Jobs");
    }

    
    

}

module.exports = JobController;