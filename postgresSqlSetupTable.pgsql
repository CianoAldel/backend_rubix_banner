DROP TABLE rubix_banner_home, rubix_banner_home_image_badge, rubix_banner_home_image_card, rubix_banner_store, rubix_banner_marketplace_image;

CREATE TABLE "rubix_banner_home" (
    "banner_home_id" SERIAL PRIMARY KEY,
    "banner_home_title" varchar,
    "banner_home_url" varchar,
    "banner_home_description" varchar,
    "banner_home_datetime" varchar,
    "banner_home_background" varchar
);

CREATE TABLE "rubix_banner_home_image_badge" (
    "banner_home_image_badge_id" SERIAL PRIMARY KEY,
    "banner_home_id" int,
    "banner_home_image_badge" varchar,
    CONSTRAINT fk_rubix_banner_home_image_badge_to_rubix_banner_home_key_banner_home_image_badge_id
    FOREIGN KEY(banner_home_id) 
    REFERENCES rubix_banner_home(banner_home_id)
);

CREATE TABLE "rubix_banner_home_image_card" (
    "banner_home_image_card_id" SERIAL PRIMARY KEY,
    "banner_home_id" int,
    "banner_home_image_card" varchar,
    CONSTRAINT fk_rubix_banner_home_image_card_to_rubix_banner_home_key_banner_home_image_card_id
    FOREIGN KEY(banner_home_id)
    REFERENCES rubix_banner_home(banner_home_id)
);

CREATE TABLE "rubix_banner_store" (
    "banner_store_id" SERIAL PRIMARY KEY,
    "banner_store_title" varchar,
    "banner_store_url" varchar,
    "banner_store_image" varchar
);

CREATE TABLE "rubix_banner_marketplace_image" (
    "banner_marketplace_image_id" SERIAL PRIMARY KEY,
    "banner_marketplace_image" varchar
);

