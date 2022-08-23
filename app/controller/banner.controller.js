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

const createBannerHome = async (req, res) => {

    const { banner_home_title, banner_home_url, banner_home_description, banner_home_datetime, banner_home_background, banner_home_image_badge, banner_home_image_card } = req.body;

console.log("req.body",req.body);

    const bannerHome = await models.rubix_banner_home.create({
        banner_home_title: banner_home_title,
        banner_home_url: banner_home_url,
        banner_home_datetime: banner_home_datetime,
        banner_home_description: banner_home_description,
        banner_home_background: banner_home_background[0],
    },
        {
            fields: [
                "banner_home_title",
                "banner_home_url",
                "banner_home_datetime",
                "banner_home_description",
                "banner_home_background"
            ],
        });

        // console.log("banner_home_image_badge",banner_home_image_badge);

    for (let i = 0; i < banner_home_image_badge.length; i++) {
        const bannerHomeImageBadge = await models.rubix_banner_home_image_badge.create({
            banner_home_id: bannerHome.banner_home_id,
            banner_home_image_badge: banner_home_image_badge[i]
        },
            {
                fields: [
                    "banner_home_id",
                    "banner_home_image_badge"
                ],
            });
    }


    for (let j = 0; j < banner_home_image_card.length; j++) {
        const bannerHomeImageCard = await models.rubix_banner_home_image_card.create({
            banner_home_id: bannerHome.banner_home_id,
            banner_home_image_card: banner_home_image_card[j]
        },
            {
                fields: [
                    "banner_home_id",
                    "banner_home_image_card"
                ],
            });
    }

    res.json({ status: true, message: "Banner Home created successfully" });
}



module.exports = {
    getBannerHome,
    createBannerHome
}