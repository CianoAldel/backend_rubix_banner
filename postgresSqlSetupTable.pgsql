-- DROP TABLE IF EXISTS users,product,store,stock,orders,orders_list;
-- CREATE TABLE "users" (
--     "user_id" SERIAL PRIMARY KEY,
--     "user_name" varchar,
--     "user_lastname" varchar,
--     "user_age" varchar
 
-- );
-- CREATE TABLE "product" (
--     "product_id" SERIAL PRIMARY KEY,
--     "product_name" varchar,
--     "product_qty" float
-- );

-- CREATE TABLE "store" (
--     "store_id" SERIAL PRIMARY KEY,
--     "store_name" varchar,
--     "store_description" varchar
  
-- );
-- CREATE TABLE "stock" (
--     "stock_id" SERIAL PRIMARY KEY,
--     "product_id" int,
--     "stock_name" varchar,
--     "store_id" int,
--     "stock_description" varchar,
--     CONSTRAINT fk_stock_to_product_key_product_id
--         FOREIGN KEY(product_id) 
--         REFERENCES product(product_id),
--     CONSTRAINT fk_stock_to_store_key_store_id
--         FOREIGN KEY(store_id) 
--         REFERENCES store(store_id)
-- );



-- CREATE TABLE "orders" (
--     "order_id" SERIAL PRIMARY KEY,
--     "user_id" int,
--     "store_id" int,
--     "order_name" varchar,
--     "order_date" timestamp,
--     CONSTRAINT fk_orders_to_user_key_user_id
--         FOREIGN KEY(user_id) 
--         REFERENCES users(user_id),
--     CONSTRAINT fk_order_to_store_key_store_id
--         FOREIGN KEY(store_id) 
--         REFERENCES store(store_id)

-- );
-- CREATE TABLE "orders_list" (
--     "order_list_id" SERIAL PRIMARY KEY,
--     "stock_id" int,
--     "order_id" int,
--     "order_list_qty" varchar,
--     CONSTRAINT fk_orders_list_to_stock_stock_id
--         FOREIGN KEY(stock_id) 
--         REFERENCES stock(stock_id),
--     CONSTRAINT fk_orders_list_to_order_id
--         FOREIGN KEY(order_id) 
--         REFERENCES orders(order_id)

-- );


-- ALTER TABLE "stock" ADD FOREIGN KEY ("stock_id") REFERENCES "order" ("stock_id");

-- ALTER TABLE "store" ADD FOREIGN KEY ("store_id") REFERENCES "stock" ("store_id");

-- ALTER TABLE "product" ADD FOREIGN KEY ("product_id") REFERENCES "store" ("product_id");

-- ALTER TABLE "users" ADD FOREIGN KEY ("user_id") REFERENCES "order" ("user_id");

DROP TABLE IF EXISTS cozy_mk_store, cozy_mk_log, cozy_action_log, cozy_receipt_sell;

CREATE TABLE "cozy_mk_store" (
    "store_id" SERIAL PRIMARY KEY,
    "owner_address" varchar,
    "item_id" int,
    "transection_mint_hash" varchar,
    "mint_address" varchar,
    "contract_address" varchar,
    "status" int,
    "store_boost_lvl" int
);

CREATE TABLE "cozy_action_log" (
    "action_id" SERIAL PRIMARY KEY,
    "action_name" varchar
);

CREATE TABLE "cozy_mk_log" (
    "log_id" SERIAL PRIMARY KEY,
    "ip_address" varchar,
    "user_address" varchar,
    "item_id" int,
    "action_id" int,
    "log_timestamp" timestamp,
    CONSTRAINT fk_cozy_mk_log_to_cozy_action_log
    FOREIGN KEY(action_id) 
    REFERENCES cozy_action_log(action_id)
);


CREATE TABLE "cozy_receipt_sell" (
    "transection_hash" varchar PRIMARY KEY,
    "transection_mint_hash" varchar,
    "item_id" int,
    "owner_address" varchar,
    "seller_address" varchar,
    "mint_address" varchar,
    "open_price" varchar,
    "price_id" varchar,
    "token_id" varchar,
    "contract_address" varchar
);

