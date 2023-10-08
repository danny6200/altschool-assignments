USE inventory;

-- Create Categories Table
-- CREATE TABLE categories (
-- 	id INT NOT NULL,
--     category_name VARCHAR(255) NOT NULL,
--     created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
--     PRIMARY KEY (id)
-- );

-- Create Users Table
-- CREATE TABLE users (
-- 	id INT NOT NULL,
--     name VARCHAR(255) NOT NULL,
--     email VARCHAR(255) NOT NULL UNIQUE,
--     password VARCHAR(255) NOT NULL,
--     address VARCHAR(255),
--     gender ENUM('Male', 'Female'),
--     country_code VARCHAR(255),
--     phone_number VARCHAR(255),
--     created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
--     PRIMARY KEY (id)
-- );

-- Create Colours Table
-- CREATE TABLE colours (
-- 	id INT NOT NULL,
--     colour_name VARCHAR(255) NOT NULL,
--     created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
--     PRIMARY KEY (id)
-- );

-- Create Items Table
-- CREATE TABLE items (
-- 	id INT NOT NULL,
--     name VARCHAR(255) NOT NULL,
--     price DECIMAL(5, 2) NOT NULL,
--     size ENUM('small', 'medium', 'large') NOT NULL,
--     available BOOLEAN DEFAULT TRUE,
--     colour_id INT,
--     category_id INT,
--     created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (colour_id) REFERENCES colours (id),
--     FOREIGN KEY (category_id) REFERENCES categories (id),
--     PRIMARY KEY (id)
-- );

-- Create Customers Table
-- CREATE TABLE customers (
-- 	id INT NOT NULL,
--     name VARCHAR(255) NOT NULL,
--     address VARCHAR(255),
--     gender ENUM('Male', 'Female'),
--     phone_number VARCHAR(255),
--     email VARCHAR(255) NOT NULL UNIQUE,
--     user_id INT,
--     created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
-- 	FOREIGN KEY (user_id) REFERENCES users (id),
--     PRIMARY KEY (id)
-- );

-- Create Item-Colours Table
-- CREATE TABLE item_colours (
-- 	id INT NOT NULL,
--     item_id INT NOT NULL,
--     colour_id INT NOT NULL,
--     created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (item_id) REFERENCES items (id),
--     FOREIGN KEY (colour_id) REFERENCES colours (id),
--     PRIMARY KEY (id)
-- );

-- Create Admin Table
-- CREATE TABLE admins (
-- 	id INT NOT NULL,
--     name VARCHAR(255) NOT NULL,
--     status VARCHAR(255) DEFAULT 'admin',
--     user_id INT,
--     created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (user_id) REFERENCES users (id),
--     PRIMARY KEY (id)
-- );

-- Create Order Table
-- CREATE TABLE orders (
-- 	id INT NOT NULL,
--     customer_id INT,
--     item_id INT NOT NULL,
--     status VARCHAR(255) DEFAULT 'pending',
--     ordered_at DATETIME DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (customer_id) REFERENCES customers (id),
--     FOREIGN KEY (item_id) REFERENCES items (id),
--     PRIMARY KEY (id)
-- );

-- Insert into categories table
-- INSERT INTO categories
-- (id, category_name)
-- VALUES (1, 'category_1');

-- INSERT INTO categories
-- (id, category_name)
-- VALUES (2, 'category_2');

-- INSERT INTO categories
-- (id, category_name)
-- VALUES (3, 'category_3');

-- Getting ALL records from categories table
-- SELECT * FROM categories;

-- Inserting into users table
-- INSERT INTO users
-- (id, name, email, password, address, gender, country_code, phone_number)
-- VALUES (1, 'user_1', 'user1@example.com', 'user1_1234', '1 Wall Street', 'Male', '+254', '80765342');

-- Inserting into users table
-- INSERT INTO users
-- (id, name, email, password, address, gender, country_code, phone_number)
-- VALUES (2, 'user_2', 'user2@example.com', 'user2_5678', '34 Buck Street', 'Female', '+061', '80115032');

-- Inserting into users table
-- INSERT INTO users
-- (id, name, email, password, address, gender, country_code, phone_number)
-- VALUES (3, 'user_3', 'user3@example.com', 'user3_91011', '10 Seymore Street', 'Male', '+111', '80260002');

-- Getting ALL records from users table
-- SELECT * FROM users;

-- Inserting into colours table
-- INSERT INTO colours
-- (id, colour_name)
-- VALUES (1, 'colour_1');

-- INSERT INTO colours
-- (id, colour_name)
-- VALUES (2, 'colour_2');

-- INSERT INTO colours
-- (id, colour_name)
-- VALUES (3, 'colour_3');

-- Getting ALL records from colours table
-- SELECT * FROM colours;

-- Inserting into items table
-- INSERT INTO items
-- (id, name, price, size, available, colour_id, category_id)
-- VALUES (1, 'item_1', 23.45, 'small', True, 1, 2);

-- INSERT INTO items
-- (id, name, price, size, available, colour_id, category_id)
-- VALUES (2, 'item_1', 123.45, 'medium', True, 2, 1);

-- INSERT INTO items
-- (id, name, price, size, available, colour_id, category_id)
-- VALUES (3, 'item_3', 786.45, 'large', True, 2, 3);

-- Getting ALL records from items table
-- SELECT * FROM items;

-- Inserting into customers table
-- INSERT INTO customers
-- (id, name, address, gender, phone_number, email, user_id)
-- VALUES (1, 'user_3', '10 Seymore Street', 'Male', '80260002', 'user3@example.com', 3);

-- INSERT INTO customers
-- (id, name, address, gender, phone_number, email, user_id)
-- VALUES (2, 'user_1', '1 Wall Street', 'Male', '80765342', 'user1@example.com', 1);

-- INSERT INTO customers
-- (id, name, address, gender, phone_number, email, user_id)
-- VALUES (3, 'user_2', '34 Buck Street', 'Female', '80115032', 'user2@example.com', 2);

-- Getting ALL records from customers table
-- SELECT * FROM customers;

-- Inserting into Item-colours table
-- INSERT INTO item_colours
-- (id, item_id, colour_id)
-- VALUES (1, 1, 1);

-- INSERT INTO item_colours
-- (id, item_id, colour_id)
-- VALUES (2, 2, 2);

-- INSERT INTO item_colours
-- (id, item_id, colour_id)
-- VALUES (3, 3, 2);

-- Inserting into admins table
-- INSERT INTO admins
-- (id, name, user_id)
-- VALUES (1, 'user_1', 1);

-- Inserting into orders table
-- INSERT INTO orders
-- (id, customer_id, item_id, status)
-- VALUES (1, 2, 1, 'approved');

-- INSERT INTO orders
-- (id, customer_id, item_id)
-- VALUES (2, 3, 1);

-- INSERT INTO orders
-- (id, customer_id, item_id, status)
-- VALUES (3, 2, 3, 'disapproved');

-- Getting the orders table
-- SELECT * FROM orders;

-- Updating the phone_numbers field in users table
-- UPDATE users SET phone_number='08011503245' WHERE id=2;
-- UPDATE customers SET phone_number='08026000203' WHERE id=1;
-- UPDATE orders SET status='approved' WHERE id=2;

-- Deleting records from orders table
-- DELETE FROM orders WHERE id=3;

-- Deleting records from item_colours table
-- DELETE FROM item_colours WHERE id=2;
