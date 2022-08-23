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
routes.post("/createBannerHome", banner.createBannerHome);


export default routes;