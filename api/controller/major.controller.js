 
const mapper = require("automapper-js");
const { MajorDto } = require("../dto");
const BaseController = require("./base.controller");

 
class MajorController extends BaseController {
    //  getMajors, getMajor, createMajor, updateMajor, deleteMajor
    constructor({ MajorService }) {
        super(MajorService,MajorDto)
        this._service = MajorService;
        this.entityDto = MajorDto;
    }
  
    // async create(req, res) {
    //     try {
    //         const {body} = req;
    //         let major = await this._service.create(body);
    //         return res.send({
    //             payload: major
    //         });
    //     } catch (error) {
    //         console.error(error);
    //         return res.status(500).send({
    //             error: 'Hubo un error al obtener los trabajos'
    //         });
    //     }
    // }



}

module.exports = MajorController;