const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trabajos_especialidades', {
    id_trabajo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'trabajos',
        key: 'id'
      }
    },
    id_especialidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'especialidades',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'trabajos_especialidades',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_trabajo" },
          { name: "id_especialidad" },
        ]
      },
      {
        name: "te_especialidades_idx",
        using: "BTREE",
        fields: [
          { name: "id_especialidad" },
        ]
      },
    ]
  });
};
