 
const mapper = require("automapper-js");
const { UserDto } = require("../dto");
const BaseController = require("./base.controller");

 
class UserController extends BaseController {
    //  getUsers, getUser, createUser, updateUser, deleteUser
    constructor({ UserService }) {
        super(UserService,UserDto)
        this._service = UserService;

    }
  
    async create(req, res) {
        try {
            const {body} = req;
            let user = await this._service.create(body);
            return res.send({
                payload: user
            });
        
   

            
        
        } catch ({name,errors}) {
            console.error(name);
            
            if (name == 'SequelizeUniqueConstraintError'){
                return res.status(500).send({
                    // error:  error.toJSON().ValidationErrorItem.messsaage
                    error:  errors[0].message
                });

            }
            else{
                return res.status(500).send({
                    error: 'Hubo un error al crear el usuario'
                });
            }
        }
    }



}

module.exports = UserController;