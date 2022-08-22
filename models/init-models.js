var DataTypes = require("sequelize").DataTypes;
var _rubix_banner_home = require("./rubix_banner_home");
var _rubix_banner_home_image_badge = require("./rubix_banner_home_image_badge");
var _rubix_banner_home_image_card = require("./rubix_banner_home_image_card");
var _rubix_banner_marketplace_image = require("./rubix_banner_marketplace_image");
var _rubix_banner_store = require("./rubix_banner_store");

function initModels(sequelize) {
  var rubix_banner_home = _rubix_banner_home(sequelize, DataTypes);
  var rubix_banner_home_image_badge = _rubix_banner_home_image_badge(sequelize, DataTypes);
  var rubix_banner_home_image_card = _rubix_banner_home_image_card(sequelize, DataTypes);
  var rubix_banner_marketplace_image = _rubix_banner_marketplace_image(sequelize, DataTypes);
  var rubix_banner_store = _rubix_banner_store(sequelize, DataTypes);

  rubix_banner_home_image_badge.belongsTo(rubix_banner_home, { foreignKey: "banner_home_id"});
  rubix_banner_home.hasMany(rubix_banner_home_image_badge, { foreignKey: "banner_home_id"});
  rubix_banner_home_image_card.belongsTo(rubix_banner_home, { foreignKey: "banner_home_id"});
  rubix_banner_home.hasMany(rubix_banner_home_image_card, { foreignKey: "banner_home_id"});

  return {
    rubix_banner_home,
    rubix_banner_home_image_badge,
    rubix_banner_home_image_card,
    rubix_banner_marketplace_image,
    rubix_banner_store,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
