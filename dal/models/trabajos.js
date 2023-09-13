const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trabajos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_tipo_trabajo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipo_trabajo',
        key: 'id'
      }
    },
    id_usuario: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    id_empresa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'empresas',
        key: 'id'
      }
    },
    id_admin: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    titulo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fecha_desde: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fecha_hasta: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(6000),
      allowNull: false
    },
    sueldo: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    ubicacion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    link: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    empresa: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nivel_experiencia: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chequeado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    chequeadoAt: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'trabajos',
    timestamps: true,
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
        name: "trabajo_empresa_idx",
        using: "BTREE",
        fields: [
          { name: "id_empresa" },
        ]
      },
      {
        name: "trabajo_usuario_idx",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
      {
        name: "trabajo_admin_revision_idx",
        using: "BTREE",
        fields: [
          { name: "id_admin" },
        ]
      },
      {
        name: "trabajo_tipo_trabajo_idx",
        using: "BTREE",
        fields: [
          { name: "id_tipo_trabajo" },
        ]
      },
    ]
  });
};
