const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cozy_mk_log', {
    log_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ip_address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    user_address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    action_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cozy_action_log',
        key: 'action_id'
      }
    },
    log_timestamp: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cozy_mk_log',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cozy_mk_log_pkey",
        unique: true,
        fields: [
          { name: "log_id" },
        ]
      },
    ]
  });
};
