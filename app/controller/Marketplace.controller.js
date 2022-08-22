var initModels = require("../../models/init-models");
const product = require("../../models/product");
const sequelize = require("../config/database");
var models = initModels(sequelize);


const getStocks = async (req, res) => {
  const _stock = await models.stock.findAll({
    include: [
      { model: models.product, as: "product" },
      { model: models.store, as: "store" },
    ],
  });
  res.json(_stock);
};

const buyOrders = async (req, res) => {
  const order_test = req.body;
  // console.log("order_test", order_test);
  for (let index = 0; index < order_test.length; index++) {

    const _orders = await models.orders.create(
      {
        user_id: order_test[index].user_id,
        store_id: order_test[index].store_id,
        order_name: order_test[index].order_name,
        order_date: Date.now(),
      },
      {
        fields: ["user_id", "store_id", "order_name", "order_date"],
      }
    );
    const _orderLists = await models.orders_list.create(
      {
        order_id: _orders.order_id,
        stock_id: order_test[index].stock_id,
        order_list_qty: order_test[index].order_list_qty,
      },
      {
        fields: ["stock_id", "order_id", "order_list_qty"],
      }
    );
    

    const _listStock = await models.stock
      .findOne({
        where: {
          stock_id: order_test[index].stock_id,
        },
        include: [
          { model: models.product, as: "product" },
          { model: models.store, as: "store" },
        ],
        raw: true,
        nest: true,
      })
      .then((result) => {
        let cal_qty = parseInt(result.product.product_qty) 
        - parseInt(order_test[index].order_list_qty);
        console.log(cal);
        models.product
          .update(
            {
              product_qty: cal_qty,
            },
            { where: { product_id: result.product.product_id } }
          )
          .then((result) => {
            
            // console.log("update recording success", result);
            res.json({result});
          })
          .catch((err) => {
            console.log("ez");
            // console.log("fail update", err);
            res.json({ status: false, text: "fail update", err });
          });
      })
      .catch((err) => {
        console.log("ggez");
        // console.log("fail findOne", err);
        res.json({ status: false, text: "fail findOne", err });
      });
  }

  // res.send({ "success": true });
};

const renderPage = async (req, res) => {
  res.render("index");
};

module.exports = {
  buyOrders,
  renderPage,
  getStocks
};
