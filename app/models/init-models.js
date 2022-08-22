var DataTypes = require("sequelize").DataTypes;
var _cozy_action_log = require("./cozy_action_log");
var _cozy_mk_log = require("./cozy_mk_log");
var _cozy_mk_store = require("./cozy_mk_store");
var _cozy_receipt_sell = require("./cozy_receipt_sell");

function initModels(sequelize) {
  var cozy_action_log = _cozy_action_log(sequelize, DataTypes);
  var cozy_mk_log = _cozy_mk_log(sequelize, DataTypes);
  var cozy_mk_store = _cozy_mk_store(sequelize, DataTypes);
  var cozy_receipt_sell = _cozy_receipt_sell(sequelize, DataTypes);

  cozy_mk_log.belongsTo(cozy_action_log, { as: "action", foreignKey: "action_id"});
  cozy_action_log.hasMany(cozy_mk_log, { as: "cozy_mk_logs", foreignKey: "action_id"});

  return {
    cozy_action_log,
    cozy_mk_log,
    cozy_mk_store,
    cozy_receipt_sell,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
