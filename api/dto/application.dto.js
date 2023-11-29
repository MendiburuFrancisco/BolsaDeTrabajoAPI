const mapper = require("automapper-js");


class ApplicationDto {
  
  id_usuario = 0;
  // id_trabajo = 0;
  createdAt = null; 
  trabajo= {
    usuario : {
      id: 0,
      nombreApellido: ""
    },
    // id_empresa = null;
    fecha_desde : null,
    fecha_hasta : null,
    descripcion : null,
    sueldo : null,
    ubicacion : null,
    link : null,
    empresa : null,
    nivel_experiencia : null,
    chequeado : 0
  };

  static mappear(application){
    const ApplicationDto = mapper(ApplicationDto, application);
    return applicationDto;
  } 
  static mappear_getAll(applicationData){
    
    let application = applicationData 

    const trabajo = {
      usuario : {
        id: application['id_trabajo_trabajo.id_usuario_usuario.id'],
        nombreApellido: application['id_trabajo_trabajo.id_usuario_usuario.nombre'] + ' ' + application['id_trabajo_trabajo.id_usuario_usuario.apellido']
      },
      // id_empresa = null;
      titulo : application['id_trabajo_trabajo.titulo'],
      fecha_desde : application['id_trabajo_trabajo.fecha_desde'],
      fecha_hasta : application['id_trabajo_trabajo.fecha_hasta'],
      descripcion : application['id_trabajo_trabajo.descripcion'],
      sueldo : application['id_trabajo_trabajo.sueldo'],
      ubicacion : application['id_trabajo_trabajo.ubicacion'],
      link : application['id_trabajo_trabajo.link'],
      empresa : application['id_trabajo_trabajo.empresa'],
      nivel_experiencia : application['id_trabajo_trabajo.nivel_experiencia'],
      chequeado : application['id_trabajo_trabajo.chequeado'],
      chequeadoAt: application['id_trabajo_trabajo.chequeadoAt'],
      tipo: application['id_trabajo_trabajo.tipoTrabajo.tipo']
      
  };
    
    const variables = ['fecha_desde','fecha_hasta','descripcion','titulo','id_tipo_trabajo','id_usuario',
          'sueldo','ubicacion','link','empresa',"id_usuario_usuario.apellido","id_usuario_usuario.nombre",'tipoTrabajo.id',
          'nivel_experiencia','chequeado','id_usuario_usuario.id','chequeadoAt','tipoTrabajo.tipo','id','createdAt','updatedAt'];

    variables.forEach(element => {
      delete application["id_trabajo_trabajo."+element];
    });

    const applicationDto = mapper(ApplicationDto, application);
    
    applicationDto.trabajo = trabajo;
    return applicationDto;
  }
  
}
  
module.exports = ApplicationDto;
  