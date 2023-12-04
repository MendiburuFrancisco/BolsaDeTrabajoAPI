const { attributes } = require("structure");

const TipoTrabajo = attributes({
  id: {
    type: Number,
    default: 0,
    // alowNull: false,
  },
  tipo: {
    type: String,
    alowNull: false,
  },
  descripcion: {
    type: String,
    alowNull: true,

  },
 
 
})(class TipoTrabajo {});

module.exports = TipoTrabajo;
