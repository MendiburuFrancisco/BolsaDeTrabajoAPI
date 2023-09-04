const { attributes } = require("structure");

const Trabajo = attributes({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  id_tipo_trabajo: {
    type: Number,
    required: true
  },
  id_usuario: {
    type: Number,
    nullable: true
  },
  id_empresa: {
    type: Number,
    nullable: true
  },
  fecha_desde: {
    type: Date,
    required: true
  },
  fecha_hasta: {
    type: Date,
    required: true
  },
  descripcion: {
    type: String,
    required: true,
    maxLength: 6000
  },
  sueldo: {
    type: Number,
    nullable: true
  },
  ubicacion: {
    type: String,
    nullable: true,
    maxLength: 100
  },
  link: {
    type: String,
    nullable: true,
    maxLength: 255
  },
  empresa: {
    type: String,
    nullable: true,
    maxLength: 255
  },
  nivel_experiencia: {
    type: String,
    nullable: true,
    maxLength: 255
  }
})(class Trabajo {

});

module.exports = Trabajo;