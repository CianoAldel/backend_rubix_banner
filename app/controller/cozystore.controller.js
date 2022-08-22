var initModels = require("../../models/init-models");
const sequelize = require("../config/database");
var models = initModels(sequelize);

const createCozyStore = async (req, res) => {
    const _cozyStore = await models.cozy_mk_store.create(
        {
        owner_address: req.body.owner_address,
        item_id: req.body.item_id,
        transection_mint_hash: req.body.transection_mint_hash,
        mint_address: req.body.mint_address,
        contract_address: req.body.contract_address,
        status: req.body.status,
        store_boost_lvl: req.body.store_boost_lvl,
        },
        {
        fields: [
            "owner_address", "item_id", "transection_mint_hash", "mint_address", "contract_address", "status", "store_boost_lvl"
        ],
        }
    ).then(function(cozyStore) {
        res.json(cozyStore);
    }).catch(function(err) {
        console.log(err);
        res.json(err);
    }
    );
}

const updateCozyStore = async (req, res) => {
    const _cozyStore = await models.cozy_mk_store.update(
        {
            owner_address: req.body.owner_address,
            item_id: req.body.item_id,
            transection_mint_hash: req.body.transection_mint_hash,
            mint_address: req.body.mint_address,
            contract_address: req.body.contract_address,
            status: req.body.status,
            store_boost_lvl: req.body.store_boost_lvl,
        },
        {
        where: {
            store_id: req.params.store_id
        },
        fields: [
            "owner_address", "item_id", "transection_mint_hash", "mint_address", "contract_address", "status", "store_boost_lvl",
        ],
        }
    );
    res.json(_cozyStore);
}

const destroyCozyStore = async (req, res) => {
    const _cozyStore = await models.cozy_mk_store.destroy(
        {
        where: {
            store_id: req.params.store_id
        },
        }
    );
    res.json(_cozyStore);
}


const createCozyLog = async (req, res) => {
    const _cozyLog = await models.cozy_mk_log.create(
        {
            ip_address: req.body.ip_address,
            user_address: req.body.user_address,
            item_id: req.body.item_id,
            action_id: req.body.action_id,
        },
        {
        fields: [
            "ip_address", "user_address", "item_id", "action_id",
        ],
        }
    );
    res.json(_cozyLog);
}

const createReceiptSell = async (req, res) => {
    const _receiptSell = await models.cozy_receipt_sell.create(
        {
            transection_mint_hash: req.body.transection_mint_hash,
            owner_address: req.body.owner_address,
            seller_address: req.body.seller_address,
            mint_address: req.body.mint_address,
            open_price: req.body.open_price,
            price: req.body.price,
            token_id: req.body.token_id,
            contract_address: req.body.contract_address,
        },
        {
        fields: [
            "transection_mint_hash", "owner_address", "seller_address", "mint_address", "open_price", "price", "token_id", "contract_address",
        ],
        }
    );
    res.json(_receiptSell);
}

const findCozyStore = async (req, res) => {
    const _cozyStore = await models.cozy_mk_store.findOne(
        {
        where: {
            store_id: req.body.store_id
        },
        }
    );
    res.json(_cozyStore);
}

const findAllCozyStore = async (req, res) => {
    const _cozyStore = await models.cozy_mk_store.findAll(
    {

    });
    res.json(_cozyStore);
}

const findCozyLog = async (req, res) => {
    const _cozyLog = await models.cozy_mk_log.findOne(
        {
        where: {
            log_id: req.params.log_id
        },
        }
    );
    res.json(_cozyLog);
}

const findReceiptSell = async (req, res) => {
    const _receiptSell = await models.cozy_receipt_sell.findOne(
        {
        where: {
            transection_hash: req.params.transection_hash
        },
        }
    );
    res.json(_receiptSell);
}

module.exports = {
    createCozyStore,
    updateCozyStore,
    destroyCozyStore,
    createCozyLog,
    createReceiptSell,
    findCozyStore,
    findAllCozyStore,
    findCozyLog,
    findReceiptSell,
}