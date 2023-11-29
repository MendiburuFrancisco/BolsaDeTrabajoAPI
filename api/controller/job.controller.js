
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
    
    let filter = {}
    const pagina = req.query?.page;
    delete req.query.page;
  // si existen parametros de busqueda
    if (req.query.search) {

      const filterValue = req.query.search;
      delete req.query.search;
      const { Op } = require("sequelize");
      filter = {
        ...req.query,
        [Op.or]: [
          {titulo: {
            [Op.like]: '%' + filterValue + '%' // Use the $like operator
          }},
         { descripcion:{
          [Op.like]: '%' + filterValue + '%' // Use the $like operator
        } }
        ]
      }
      }else{
        filter = {
          ...req.query
        }
      
      
    }

    console.log(filter)

    let jobs = await this._service.getAll(filter,pagina);
    jobs = jobs.map((job) => {
      const jobDto = JobDto.mappear_getAll(job);
      return jobDto;
    });
    return res.send(jobs);
  }

  async create(req, res) {
      try {
          const {body} = req;
          let job = await this._service.create(body);
          return res.status(201).send({
              payload: job
          });
      } catch (error) {
          console.error(error);
          return res.status(500).send({
              error: 'Hubo un error al obtener los trabajos'
          });
      }
  }
}

module.exports = JobController;
