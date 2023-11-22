const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('postulantes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_especialidad: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'especialidades',
        key: 'id'
      }
    },
    legajo: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "legajo_UNIQUE"
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "email_UNIQUE"
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    anio_cursando: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    turno_cursando: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    promedio_con_aplazos: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    promedio_sin_aplazos: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'postulantes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "legajo_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "legajo" },
        ]
      },
      {
        name: "email_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "postulante_especialidad_idx",
        using: "BTREE",
        fields: [
          { name: "id_especialidad" },
        ]
      },
    ]
  });
};
