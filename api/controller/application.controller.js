 
const mapper = require("automapper-js");
const { ApplicationDto } = require("../dto");
const BaseController = require("./base.controller");
const JwtAdapter = require("../../helpers/jwt");
 
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
        const token = req.headers?.authorization?.split(" ")[1];

        if (!token) {
          return res.status(401).send("No token provided");
        }
        const decoded = JwtAdapter.verifyToken(token, process.env.JWT_SECRET);
        const user_id = decoded.id;

        filter = {"id_usuario": user_id}
    
        console.log(filter)
    
        let jobs = await this._service.getAll(filter,pagina);
        try{
          jobs = jobs.map((job) => {
            const jobDto = ApplicationDto.mappear_getAll(job);
            return jobDto;
          });
          return res.send(jobs);
      
        }catch(error){
          console.error(error);
          return res.status(500).send({
            error: "Hubo un error al obtener los elementos",
          });
        }
      }

    
      async create(req, res) {

        try{

          let request = req.body;
          const token = req.headers?.authorization?.split(" ")[1]
          if (token && request.id_usuario < 0) {
            const decoded = JwtAdapter.verifyToken(token, process.env.JWT_SECRET);
            const user_id = decoded.id;
            request.id_usuario = user_id;
          }

          const  body  = request;

          
          const createdentity = await this._service.create(body);
          const entity = mapper(this.entityDto, createdentity);
          return res.status(201).send({
            payload: entity,
          });
    
        } catch(error){
          console.error(error);
          return res.status(500).send({
            error: "Hubo un error al crear el elemento",
          });
        }
      }

  


}

module.exports = ApplicationController;