const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('postulaciones', {
    id_usuario: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    id_trabajo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'trabajos',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'postulaciones',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
          { name: "id_trabajo" },
        ]
      },
      {
        name: "postulacoines_trabajo_idx",
        using: "BTREE",
        fields: [
          { name: "id_trabajo" },
        ]
      },
    ]
  });
};
