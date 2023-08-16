class UserController {

    getAll(req, res) {
        res.send("Get All Users");
    }

    getAppliedJobs(req, res) {
        res.send("Get Applied Jobs");
    }
    
}

module.exports = UserController;