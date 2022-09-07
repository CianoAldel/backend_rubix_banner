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

const getBannerHomeById = async (req, res) => {

    console.log(req.query);

    const bannerHome = await models.rubix_banner_home.findOne({
        where: {
            banner_home_id: req.query.banner_home_id
        },
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

    console.log("req.body", req.body);

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

const createBannerStore = async (req, res) => {

    const { banner_store_title, banner_store_url, banner_store_datetime, banner_store_image } = req.body;

    console.log("req.body", req.body);

    const bannerStore = await models.rubix_banner_store.create({

        banner_store_title: banner_store_title,
        banner_store_url: banner_store_url,
        banner_store_datetime: banner_store_datetime,
        banner_store_image: banner_store_image[0]
    },
        {
            fields: [
                "banner_store_title",
                "banner_store_url",
                "banner_store_datetime",
                "banner_store_image"
            ],
        });

    // console.log("banner_home_image_badge",banner_home_image_badge);


    res.json({ status: true, message: "Banner Store created successfully" });
}

const createBannerMarketplace = async (req, res) => {

    const { banner_marketplace_image } = req.body;
    console.log("banner_marketplace_image",banner_marketplace_image);

    const bannerMarketplace = await models.rubix_banner_marketplace_image.create({
        banner_marketplace_image: banner_marketplace_image[0]
    },
        {
            fields: [
                "banner_marketplace_image"
            ],
        });

    // console.log("banner_home_image_badge",banner_home_image_badge);

    res.json({ status: true, message: "Banner Marketplace created successfully" });
}

const updateBannerMarketplace = async (req, res) => {

    const { banner_marketplace_image_id, banner_marketplace_image } = req.body;

    const bannerStore = await models.rubix_banner_marketplace_image.update({
        banner_marketplace_image: banner_marketplace_image
    },
        {
            where: {
                banner_marketplace_image_id: banner_marketplace_image_id
            }
        });

    res.json({ status: true, message: "Banner Marketplace Update successfully" });
}

const updateBannerHome = async (req, res) => {

    const { banner_home_id, banner_home_title, banner_home_url, banner_home_description, banner_home_datetime, banner_home_background, banner_home_image_badge, banner_home_image_card } = req.body;

    try {

        console.log("req.body", req.body);

        const bannerHome = await models.rubix_banner_home.update({
            banner_home_title: banner_home_title,
            banner_home_url: banner_home_url,
            banner_home_datetime: banner_home_datetime,
            banner_home_description: banner_home_description,
            banner_home_background: banner_home_background[0],
        },
            {
                where: {
                    banner_home_id: banner_home_id,
                },
            });

        // *********delete old image badge and new insert image********
        //

        const getImageBadge = await models.rubix_banner_home_image_badge.findAll(
            {
                raw: true
            }
        ).then(element => {
            return element
        })

        console.log(getImageBadge);

        if (getImageBadge.length > 0) {
            getImageBadge.forEach(element => {
                models.rubix_banner_home_image_badge.destroy({
                    where: {
                        banner_home_image_badge_id: element.banner_home_image_badge_id
                    }
                });
            });
            for (let g = 0; g < banner_home_image_badge.length; g++) {
                await models.rubix_banner_home_image_badge.create({
                    banner_home_id: banner_home_id,
                    banner_home_image_badge: banner_home_image_badge[g],
                },
                    {
                        fields: [
                            "banner_home_id",
                            "banner_home_image_badge",
                        ],
                    }
                );
            }

        } else {
            for (let g = 0; g < banner_home_image_badge.length; g++) {
                await models.rubix_banner_home_image_badge.create({
                    banner_home_id: banner_home_id,
                    banner_home_image_badge: banner_home_image_badge[g],
                },
                    {
                        fields: [
                            "banner_home_id",
                            "banner_home_image_badge",
                        ],
                    }
                );
            }
        }

        // *********delete old image card and new insert image********
        //

        const getImageCard = await models.rubix_banner_home_image_card.findAll(
            {
                raw: true
            }
        ).then(element => {
            return element
        })


        if (getImageCard.length > 0) {
            getImageCard.forEach(element => {

                models.rubix_banner_home_image_card.destroy({
                    where: {
                        banner_home_image_card_id: element.banner_home_image_card_id
                    }
                });
            });
            for (let g = 0; g < banner_home_image_card.length; g++) {
                await models.rubix_banner_home_image_card.create({
                    banner_home_id: banner_home_id,
                    banner_home_image_card: banner_home_image_card[g],
                },
                    {
                        fields: [
                            "banner_home_id",
                            "banner_home_image_card",
                        ],
                    }
                );
            }
        } else {
            for (let g = 0; g < banner_home_image_card.length; g++) {
                await models.rubix_banner_home_image_card.create({
                    banner_home_id: banner_home_id,
                    banner_home_image_card: banner_home_image_card[g],
                },
                    {
                        fields: [
                            "banner_home_id",
                            "banner_home_image_card",
                        ],
                    }
                );
            }
        }

        res.json({ status: true, message: "Banner Home created successfully" });

    } catch (error) {
        console.log("error", error);
    }
}

const updateBannerStore = async (req, res) => {

    const { banner_store_id, banner_store_title, banner_store_url, banner_store_datetime, banner_store_image } = req.body;
    console.log("req.body", req.body);
    try {
        const bannerStore = await models.rubix_banner_store.update({

            banner_store_title: banner_store_title,
            banner_store_url: banner_store_url,
            banner_store_datetime: banner_store_datetime,
            banner_store_image: banner_store_image[0]
        },
            {
                where: {
                    banner_store_id: banner_store_id,
                },
            });

        res.json({ status: true, message: "Banner Store update successfully" });
    } catch (error) {
        console.log(error);
    }

}


const getBannerStore = async (req, res) => {

    const bannerStore = await models.rubix_banner_store.findAll({
    });

    res.json(bannerStore);
}

const getBannerStoreById = async (req, res) => {

    console.log(req.query);

    const bannerStore = await models.rubix_banner_store.findOne({
        where: {
            banner_store_id: req.query.banner_store_id
        }
    });

    res.json(bannerStore);
}

const getMarketplaceImage = async (req, res) => {

    console.log(req.query);

    const bannerMarketplace = await models.rubix_banner_marketplace_image.findAll({
    });

    res.json(bannerMarketplace);
}

module.exports = {
    createBannerHome,
    createBannerStore,
    createBannerMarketplace,
    updateBannerHome,
    updateBannerStore,
    updateBannerMarketplace,
    getBannerHome,
    getBannerHomeById,
    getBannerStore,
    getBannerStoreById,
    getMarketplaceImage
}