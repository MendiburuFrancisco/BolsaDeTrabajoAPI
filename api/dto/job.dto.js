const mapper = require("automapper-js");


class JobDto {
    
  
    id = 0;
    // id_tipo_trabajo = 0;
    tipo = ""
    usuario = {
      id: 0,
      nombreApellido: ""
    };
    // id_empresa = null;
    fecha_desde = null;
    fecha_hasta = null;
    descripcion = null;
    sueldo = null;
    ubicacion = null;
    link = null;
    empresa = null;
    nivel_experiencia = null;
    chequeado = 0;
    // chequeadoAt = null;
    // createdAt = null;
    // updatedAt = null;


    static mappear(job){
      const jobDto = mapper(JobDto, job);
      return jobDto;
    }

    static mappear_getAll(jobData){
      
      let job = jobData
      const nombreApellido = job['id_usuario_usuario.nombre'] + ' ' + job['id_usuario_usuario.apellido'];
      delete job['id_usuario_usuario.nombre'];
      delete job['id_usuario_usuario.apellido'];
      const tipoTrabajo = job['tipoTrabajo.tipo'];
      delete job['tipoTrabajo.tipo'];
      delete job['createdAt'];
      delete job['updatedAt'];
      delete job['id_tipo_trabajo'];
      const id_subido_por = job['id_usuario'];
      delete job['id_usuario'];
      
      const jobDto = mapper(JobDto, job);
      
      jobDto.tipo = tipoTrabajo;
      jobDto.usuario.nombreApellido = nombreApellido;
      jobDto.usuario.id = id_subido_por;

      return jobDto;
    }

  }
  
  module.exports = JobDto;
  