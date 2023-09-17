const configs = require("../../configs/enviroments/");
const mapper = require("automapper-js");
const { JobDto } = require("../dto");
const BaseController = require("./base.controller");

// const username = configs.SCRAPPER.user
// const password = configs.SCRAPPER.password;
// const url = configs.SCRAPPER.url_login;
// const _clave = configs.SCRAPPER.clave;

class JobController extends BaseController {
  //  getJobs, getJob, createJob, updateJob, deleteJob
  constructor({ JobService }) {
    super(JobService, JobDto);
    this._service = JobService;
  }

  sayHello(req, res) {
    res.send("Hello World");
  }

  async getAll(req, res) {
    let jobs = await this._service.getAll();
    jobs = jobs.map((job) => {
      const jobDto = JobDto.mappear_getAll(job);
      return jobDto;
    });

    return res.send({
      payload: jobs,
    });
  }

  // async create(req, res) {
  //     try {
  //         const {body} = req;
  //         let job = await this._service.create(body);
  //         return res.send({
  //             payload: job
  //         });
  //     } catch (error) {
  //         console.error(error);
  //         return res.status(500).send({
  //             error: 'Hubo un error al obtener los trabajos'
  //         });
  //     }
  // }
}

module.exports = JobController;
