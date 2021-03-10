-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

-- SELECT DATABASE
-- USE ecommerce_db;

-- -- DUMMY DATA

-- INSERT INTO Category (category_name) 
-- VALUES
--     ('meat'),('fruit'),('vegetable');

-- INSERT INTO Product (product_name, price, stock, category_id)
-- VALUES
--     ('Beef',2.65,10,1), ('Whole chicken',1.28,30,1),
--     ('Apple',0.59,50,2), ('Banana',0.15,80,2),
--     ('Carrot',1.71,140,3), ('Cauliflower',3.97,20,3);

-- INSERT INTO ProductTag(product_id,tag_id)
-- VALUES
--      (1,1), (2,2) (3,3);

-- INSERT INTO Tag(tag_name)
-- VALUES
--      ('10% off'),('25% off'),('15% off');