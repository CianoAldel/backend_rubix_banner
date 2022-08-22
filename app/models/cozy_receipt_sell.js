const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cozy_receipt_sell', {
    transection_hash: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    transection_mint_hash: {
      type: DataTypes.STRING,
      allowNull: true
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    owner_address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    seller_address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mint_address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    open_price: {
      type: DataTypes.STRING,
      allowNull: true
    },
    price_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    token_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contract_address: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cozy_receipt_sell',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cozy_receipt_sell_pkey",
        unique: true,
        fields: [
          { name: "transection_hash" },
        ]
      },
    ]
  });
};
