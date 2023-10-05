var DataTypes = require("sequelize").DataTypes;
// var _administradores = require("../entities/administradores");
var _empresas = require("./empresas");
var _especialidades = require("./entities/especialidades");
var _informacion_trabajos = require("./entities/informacion_trabajos");
var _postulaciones = require("./entities/postulaciones");
var _postulantes = require("./postulantes");
var _roles = require("./entities/roles");
var _tipo_trabajo = require("./entities/tipo_trabajo");
var _trabajos = require("./entities/trabajos");
var _trabajos_especialidades = require("./entities/trabajos_especialidades");
var _usuarios = require("./entities/usuarios");

function initModels(sequelize) {
  // var administradores = _administradores(sequelize, DataTypes);
  var empresas = _empresas(sequelize, DataTypes);
  var especialidades = _especialidades(sequelize, DataTypes);
  var informacion_trabajos = _informacion_trabajos(sequelize, DataTypes);
  var postulaciones = _postulaciones(sequelize, DataTypes);
  var postulantes = _postulantes(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var tipo_trabajo = _tipo_trabajo(sequelize, DataTypes);
  var trabajos = _trabajos(sequelize, DataTypes);
  var trabajos_especialidades = _trabajos_especialidades(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);

  especialidades.belongsToMany(trabajos, { as: 'id_trabajo_trabajos_trabajos_especialidades', through: trabajos_especialidades, foreignKey: "id_especialidad", otherKey: "id_trabajo" });
  trabajos.belongsToMany(especialidades, { as: 'id_especialidad_especialidades', through: trabajos_especialidades, foreignKey: "id_trabajo", otherKey: "id_especialidad" });
  trabajos.belongsToMany(usuarios, { as: 'id_usuario_usuarios', through: postulaciones, foreignKey: "id_trabajo", otherKey: "id_usuario" });
  usuarios.belongsToMany(trabajos, { as: 'id_trabajo_trabajos', through: postulaciones, foreignKey: "id_usuario", otherKey: "id_trabajo" });
  trabajos.belongsTo(empresas, { as: "id_empresa_empresa", foreignKey: "id_empresa"});
  empresas.hasMany(trabajos, { as: "trabajos", foreignKey: "id_empresa"});
  postulantes.belongsTo(especialidades, { as: "id_especialidad_especialidade", foreignKey: "id_especialidad"});
  especialidades.hasMany(postulantes, { as: "postulantes", foreignKey: "id_especialidad"});
  trabajos_especialidades.belongsTo(especialidades, { as: "id_especialidad_especialidade", foreignKey: "id_especialidad"});
  especialidades.hasMany(trabajos_especialidades, { as: "trabajos_especialidades", foreignKey: "id_especialidad"});
  usuarios.belongsTo(roles, { as: "id_role_role", foreignKey: "id_role"});
  roles.hasMany(usuarios, { as: "usuarios", foreignKey: "id_role"});
  trabajos.belongsTo(tipo_trabajo, { as: "tipoTrabajo", foreignKey: "id_tipo_trabajo"});
  tipo_trabajo.hasMany(trabajos, { as: "trabajos", foreignKey: "id_tipo_trabajo"});
  postulaciones.belongsTo(trabajos, { as: "id_trabajo_trabajo", foreignKey: "id_trabajo"});
  trabajos.hasMany(postulaciones, { as: "postulaciones", foreignKey: "id_trabajo"});
  trabajos_especialidades.belongsTo(trabajos, { as: "id_trabajo_trabajo", foreignKey: "id_trabajo"});
  trabajos.hasMany(trabajos_especialidades, { as: "trabajos_especialidades", foreignKey: "id_trabajo"});
  empresas.belongsTo(usuarios, { as: "id_admin_alta_usuario", foreignKey: "id_admin_alta"});
  usuarios.hasMany(empresas, { as: "empresas", foreignKey: "id_admin_alta"});
  postulaciones.belongsTo(usuarios, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuarios.hasMany(postulaciones, { as: "postulaciones", foreignKey: "id_usuario"});
  trabajos.belongsTo(usuarios, { as: "id_admin_usuario", foreignKey: "id_admin"});
  usuarios.hasMany(trabajos, { as: "trabajos", foreignKey: "id_admin"});
  trabajos.belongsTo(usuarios, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuarios.hasMany(trabajos, { as: "id_usuario_trabajos", foreignKey: "id_usuario"});

  return {
    // administradores,
    empresas,
    especialidades,
    informacion_trabajos,
    postulaciones,
    postulantes,
    roles,
    tipo_trabajo,
    trabajos,
    trabajos_especialidades,
    usuarios,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
