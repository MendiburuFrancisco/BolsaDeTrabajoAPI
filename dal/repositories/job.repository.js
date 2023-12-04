const BaseRepository = require("./base.repository");

class JobRepository extends BaseRepository {

  constructor({db}) {
    // this._db = db;
    super(db, "trabajos")
  }

    // async getAll() {
    //   // try {
    //     const elements = await this._db[this.model].findAll({ raw: true });
    //     console.log(elements);
    //     return elements;
    //   // } catch (err) {
    //   //   console.error(err);
    //   // }
    // }

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
        include: [{
          model: this._db.tipo_trabajo,
          as: 'tipoTrabajo',
          attributes: ['id','tipo']
        },
      {
        model: this._db.usuarios,
        as: 'id_usuario_usuario',
        attributes: ['nombre', 'apellido']

      },
    
      ]
        // attributes:{
        //   exclude: ['id_tipo_trabajo','id_usuario', 'id_empresa']
        // } 
      });
      // console.log(elements);
      return elements;
      // return elements['rows'];
    }
    
    async createVerifiedJob(job) {
      job.id_empresa = 1; 
      
      const element = await this._db[this.model].create(job);
      return element;
    }
}

module.exports = JobRepository;