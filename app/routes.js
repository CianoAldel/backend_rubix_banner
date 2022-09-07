import { Router } from 'express';

const routes = new Router();
var initModels = require("../models/init-models");
const sequelize = require('./config/database');
var models = initModels(sequelize);
const banner = require("./controller/banner.controller");


// สร้าง routing โดยใช้ HTTP GET 
routes.get("/", (req, res) => {
    const json = JSON.parse('{"test":"Hello World Marketplace"}');
    res.send(json);
});


routes.get("/getBannerHome", banner.getBannerHome);
routes.get("/getBannerHomeById", banner.getBannerHomeById);
routes.get("/getBannerStore", banner.getBannerStore);
routes.get("/getBannerStoreById", banner.getBannerStoreById);
routes.get("/getMarketplaceImage", banner.getMarketplaceImage);
routes.post("/createBannerHome", banner.createBannerHome);
routes.post("/createBannerStore", banner.createBannerStore);
routes.post("/createBannerMarketplace", banner.createBannerMarketplace);
routes.post("/updateBannerHome", banner.updateBannerHome);
routes.post("/updateBannerStore", banner.updateBannerStore);
routes.post("/updateBannerMarketplace", banner.updateBannerMarketplace);


export default routes;