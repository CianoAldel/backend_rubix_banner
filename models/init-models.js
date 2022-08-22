var DataTypes = require("sequelize").DataTypes;
var _dega_achievement = require("./dega_achievement");
var _dega_events = require("./dega_events");
var _dega_gacha_log = require("./dega_gacha_log");
var _dega_monster_data = require("./dega_monster_data");
var _dega_monster_inv = require("./dega_monster_inv");
var _dega_monster_team = require("./dega_monster_team");
var _dega_news = require("./dega_news");
var _dega_pvp_log = require("./dega_pvp_log");
var _dega_quest = require("./dega_quest");
var _monster_active_skill = require("./monster_active_skill");
var _monster_status_effect = require("./monster_status_effect");
var _user_login_Log = require("./user_login_Log");
var _users = require("./users");

function initModels(sequelize) {
  var dega_achievement = _dega_achievement(sequelize, DataTypes);
  var dega_events = _dega_events(sequelize, DataTypes);
  var dega_gacha_log = _dega_gacha_log(sequelize, DataTypes);
  var dega_monster_data = _dega_monster_data(sequelize, DataTypes);
  var dega_monster_inv = _dega_monster_inv(sequelize, DataTypes);
  var dega_monster_team = _dega_monster_team(sequelize, DataTypes);
  var dega_news = _dega_news(sequelize, DataTypes);
  var dega_pvp_log = _dega_pvp_log(sequelize, DataTypes);
  var dega_quest = _dega_quest(sequelize, DataTypes);
  var monster_active_skill = _monster_active_skill(sequelize, DataTypes);
  var monster_status_effect = _monster_status_effect(sequelize, DataTypes);
  var user_login_Log = _user_login_Log(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  dega_achievement.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(dega_achievement, { as: "dega_achievements", foreignKey: "user_id"});
  dega_monster_inv.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(dega_monster_inv, { as: "dega_monster_invs", foreignKey: "user_id"});
  dega_monster_team.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(dega_monster_team, { as: "dega_monster_teams", foreignKey: "user_id"});
  user_login_Log.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(user_login_Log, { as: "user_login_Logs", foreignKey: "user_id"});

  return {
    dega_achievement,
    dega_events,
    dega_gacha_log,
    dega_monster_data,
    dega_monster_inv,
    dega_monster_team,
    dega_news,
    dega_pvp_log,
    dega_quest,
    monster_active_skill,
    monster_status_effect,
    user_login_Log,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
