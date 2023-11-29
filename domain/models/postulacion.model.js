const { attributes } = require("structure");
 
  const Postulacion = attributes({
    id_usuario: {
      type: Number,
      allowNull: false,
    },
    id_trabajo: {
      type: Number,
      allowNull: false,

    },
    createdAt: {
      type: Date,
      nullable: true,
    }, 
 
  })(class Postulacion { 

      

   });
  
  module.exports = Postulacion;
  