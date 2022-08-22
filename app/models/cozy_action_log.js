const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cozy_action_log', {
    action_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    action_name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cozy_action_log',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cozy_action_log_pkey",
        unique: true,
        fields: [
          { name: "action_id" },
        ]
      },
    ]
  });
};
