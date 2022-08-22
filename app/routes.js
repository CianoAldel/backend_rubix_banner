import { Router } from 'express';

const routes = new Router();
var initModels = require("../models/init-models");
const sequelize = require('./config/database');
var models = initModels(sequelize);
// const insertStock = require("./controller/Stock.controller");
// const uploads = require("./controller/Upload.controller");
// const marketplace = require("./controller/Marketplace.controller");
const cozystore = require("./controller/cozystore.controller");


// สร้าง routing โดยใช้ HTTP GET 
routes.get("/", (req, res) => {
    const json = JSON.parse('{"test":"Hello World Marketplace"}');
    res.send(json);
});

// routes.route("/createStock").get(insertStock.create);

// //upload
// routes.post("/upload", uploads.upload);
// routes.get("/files", uploads.getListFiles);
// routes.get("/files/:name", uploads.download);

// //margetplace
// routes.get("/getStocks", marketplace.getStocks);
// routes.post("/buyOrders", marketplace.buyOrders);
// routes.get("/index", marketplace.renderPage);

// create store
routes.get("/createstore", cozystore.createCozyStore);
routes.get("/updatestore", cozystore.updateCozyStore);
routes.get("/destroystore", cozystore.destroyCozyStore);
routes.get("/createlog", cozystore.createCozyLog);
routes.get("/createresell", cozystore.createReceiptSell);

// find store
routes.get("/cozystore", cozystore.findCozyStore);
routes.get("/allcozystore", cozystore.findAllCozyStore);
routes.get("/storelog", cozystore.findCozyLog);
routes.get("/receiptsell", cozystore.findReceiptSell);


export default routes;