 
const mapper = require("automapper-js");
const { ApplicationDto } = require("../dto");
const BaseController = require("./base.controller");

 
class ApplicationController extends BaseController {
    //  getApplications, getApplication, createApplication, updateApplication, deleteApplication
    constructor({ ApplicationService }) {
        super(ApplicationService,ApplicationDto)
        this._service = ApplicationService;
        this.entityDto = ApplicationDto;
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
          const jobDto = ApplicationDto.mappear_getAll(job);
          return jobDto;
        });
        return res.send(jobs);
      }
    

  


}

module.exports = ApplicationController;