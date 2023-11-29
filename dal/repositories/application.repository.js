const BaseRepository = require("./base.repository");

class ApplicationRepository extends BaseRepository {

  constructor({db}) {
    super(db, "postulaciones")
  }
  
  
  // async getAllJobApplications(filter = {}, page = 1, limit = 11) {


  // async getAllUserApplications(filter = {}, page = 1, limit = 11) {
    async getAll(filter = {}, page = 1, limit = 11) {

    let _offset = 0;
    if (page > 1) {
      _offset = (page - 1) * limit;
    }

    console.log(filter)
    const elements = await this._db[this.model].findAll({
      // const elements = await this._db[this.model].findAndCountAll({
      raw: true,
      offset:_offset,
      limit:limit,
      where:filter,
       

      include: [
        {
          model: this._db.trabajos,
          as: 'id_trabajo_trabajo',
          
          // exclude: ['id_tipo_trabajo','id_usuario', 'id_empresa'],
          // attributes: ['titulo','descripcion','fecha_inicio','fecha_fin','id_tipo_trabajo','id_usuario','id_empresa','id_estado']
          attributes: ['titulo','descripcion','fecha_desde','fecha_hasta'],
          include:[
          {
            model: this._db.tipo_trabajo,
            as: 'tipoTrabajo',
            attributes: ['tipo']
 
 
        },
        {
          model: this._db.usuarios,
          as: 'id_usuario_usuario',
          attributes: ['nombre', 'apellido']
    
        },]
        }  
      ]
        

  
  
   
    });
 
    return elements;
    // return elements['rows'];
  }

  create(model) {
    return this._db[this.model].create(model.toJSON());
  }


}

module.exports = ApplicationRepository;