// class
var initModels = require("../../models/init-models");
const sequelize = require("../config/database");
var models = initModels(sequelize);

exports.getAllData = async (req, res, next) => {
  try {
    // =================================================
    models.stock
      .findAll({
        include: [
          { model: models.product, as: "product" },
          { model: models.store, as: "store" },
        ],
      })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
    // =================================================
  } catch (e) {
    res.status(400).json({
      status: "fail",
      Error: e,
    });
  }
};
exports.create = async (req, res, next) => {
  try {
    // =================================================
    // random vehicle name
    let username = [
      "Honda",
      "Toyota",
      "Suzuki",
      "Mitsubishi",
      "Nissan",
      "Mazda",
      "Kia",
      "Ford",
      "Hyundai",
      "Daihatsu",
    ];
    //    data random price 5 array
    const _product = await models.product.create(
      {
        // product_id: "1",
        product_name: username[Math.floor(Math.random() * username.length)],
        product_qty: Math.floor(Math.random() * 100),
      },
      {
        fields: [
          // 'product_id',
          "product_name",
          "qty",
        ],
      }
    );
    // console.log(_product);
    const _store = await models.store.create(
      {
        // store_id:"1",
        store_name: username[Math.floor(Math.random() * username.length)],
        store_description:
          username[Math.floor(Math.random() * username.length)],
      },
      {
        fields: [
          // 'store_id',
          "store_name",
          "store_description",
        ],
      }
    );
    // console.log(_store);
    const _stock = await models.stock.create(
      {
        // stock_id: "1",
        product_id: _product.product_id,
        stock_name: username[Math.floor(Math.random() * username.length)],
        store_id: _store.store_id,
        stock_description:
          username[Math.floor(Math.random() * username.length)],
      },
      {
        fields: [
          // 'stock_id',
          "product_id",
          "stock_name",
          "store_id",
          "stock_description",
        ],
      }
    );
    // console.log(_stock);

    res.json({ _product, _store, _stock });

    // =================================================
  } catch (e) {
    res.status(400).json({
      status: "fail",
      Error: e,
    });
  }
};
