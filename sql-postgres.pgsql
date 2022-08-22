-- Delete many rows record
DELETE FROM orders_list WHERE order_list_id IN (1, 2, 3);

-- Update many rows record

UPDATE product SET product_qty = 20 WHERE product_id IN (1,4,3);

