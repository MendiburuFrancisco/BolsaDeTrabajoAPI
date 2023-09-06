// const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  const Trabajo = sequelize.define('trabajos', {
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
      allowNull: true
    },
    id_empresa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'empresas',
        key: 'id'
      }
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
    }
  }, {
    sequelize,
    tableName: 'trabajos',
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
        name: "trabajo_empresa_idx",
        using: "BTREE",
        fields: [
          { name: "id_empresa" },
        ]
      },
    ]
  });
  
  Trabajo.associate = function(models) {
    Trabajo.belongsTo(models.tipo_trabajo, {
      foreignKey: 'id_tipo_trabajo',
      as: 'tipoTrabajo'
    });
  };
  
  return Trabajo;
};
