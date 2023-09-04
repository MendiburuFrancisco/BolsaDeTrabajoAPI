const { Trabajos } = require("../../dal/models/trabajos")
const { Usuarios } = require("../entities/usuarios")

module.exports = {
    toDomainEntityTrabajos(trabajos){
       const { id, id_tipo_trabajo, id_usuario, id_empresa, fecha_desde, fecha_hasta, descripcion, sueldo, ubicacion, link, empresa, nivel_experiencia } = trabajos
         return new Trabajos(id, id_tipo_trabajo, id_usuario, id_empresa, fecha_desde, fecha_hasta, descripcion, sueldo, ubicacion, link, empresa, nivel_experiencia)
    },
    toDomainEntityUsuarios(usuarios){
        // Aquí se puede agregar la lógica para mapear a la entidad de dominio Usuarios
        
    }
}