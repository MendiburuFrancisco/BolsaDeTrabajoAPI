const Scrapper = require('../../services/scrapper/Scrapper'); 
const configs = require("../../configs/enviroments/")


const username = configs.SCRAPPER.user
const password = configs.SCRAPPER.password;
const url = configs.SCRAPPER.url_login;
const _clave = configs.SCRAPPER.clave;

class JobController {
    //  getJobs, getJob, createJob, updateJob, deleteJob
    constructor({ JobService }) {
        this._jobService = JobService;
    }

    sayHello(req, res) {
        res.send("Hello World");
    }
 
    async getAll(req, res) {
        try {
            let jobs = await this._jobService.getAll();
            return res.send({
                payload: jobs
            });
        } catch (error) {
            console.error(error);
            return res.status(500).send({
                error: 'Hubo un error al obtener los trabajos'
            });
        }
    }

    async create(req, res) {
        try {
            const {body} = req;
            let job = await this._jobService.create(body);
            return res.send({
                payload: job
            });
        } catch (error) {
            console.error(error);
            return res.status(500).send({
                error: 'Hubo un error al obtener los trabajos'
            });
        }
    }



    async getJobsFromScrapper(req, res) {
        try {

            let diff_in_days = (new Date() - information.last_update) / 86400000;
            if (diff_in_days > 1) {
                const axios_scrapper = new Scrapper(url, _clave, _usuario, _pass);
                const jobs_response = await axios_scrapper.getJobs();
                information.jobs = jobs_response;
                information.last_update = new Date();
            }
    
            if (information.jobs.length > 0) {
                answer = information.jobs;
    
                if (req.query.speciality) {
                    answer = information.jobs.filter((job) => {
                        return job.hasSpeciality(req.query.speciality)
                    });
                }
    
    
                res.status(200).send(answer);
    
    
            } else {
                // No hay trabajos, devolver un error 404
                res.status(404).send('No hay trabajos disponibles');
    
            }
        } catch (error) {
            console.log(error);
            res.status(500).send('Error en la petición')
        }
    }


}

module.exports = JobController;