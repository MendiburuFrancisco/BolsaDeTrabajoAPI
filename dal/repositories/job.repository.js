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

    async getAll() {
      const elements = await this._db[this.model].findAll({
        raw: true,
        include: [{
          model: this._db.tipo_trabajo,
          as: 'tipoTrabajo',
          attributes: ['tipo']
        }]
        // attributes:{
        //   exclude: ['id_tipo_trabajo','id_usuario', 'id_empresa']
        // } 
      });
      console.log(elements)
      return elements;
    }
    
    async createVerifiedJob(job) {
      job.id_empresa = 1; 
      
      const element = await this._db[this.model].create(job);
      return element;
    }
}

module.exports = JobRepository;