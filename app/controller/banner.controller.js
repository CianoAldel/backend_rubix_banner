var initModels = require("../../models/init-models");
const sequelize = require("../config/database");
var models = initModels(sequelize);


const getBannerHome = async (req, res) => {

    const bannerHome = await models.rubix_banner_home.findAll({
        include: [
            {
                model: models.rubix_banner_home_image_badge
            },
            {
                model: models.rubix_banner_home_image_card
            }
        ]
    });
    res.json(bannerHome);
}



module.exports = {
    getBannerHome
}