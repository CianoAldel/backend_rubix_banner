const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cozy_mk_store', {
    store_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    owner_address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    transection_mint_hash: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mint_address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contract_address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    store_boost_lvl: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cozy_mk_store',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cozy_mk_store_pkey",
        unique: true,
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
