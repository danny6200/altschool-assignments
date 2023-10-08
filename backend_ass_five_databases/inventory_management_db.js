//Create categories
db.createCollections("categories");

//Create users
db.createCollections("users");

//Create colours
db.createCollections("colours");

//Create customers
db.createCollections("customers");

//Create admins
db.createCollections("admins");

//Create item_colours
db.createCollections("item_colours")

//Create items
db.createCollections("items")

//Create orders
db.createCollections("orders")

//Insert into categories
db.categories.insertMany([{_id: 1, category_name: "category_1"}, {_id: 2, category_name: "category_2"}, {_id: 3, category_name: "category_3"}])

//Insert into colours
db.colours.insertMany([{_id: 1, colour_name: "colour_1"}, {_id: 2, colour_name: "colour_2"}, {_id: 3, colour_name: "colour_3"}])

//Insert into users
db.users.insertOne({_id: 1, name: "user_1", email: "user_1@example.com", password: "user_1234", address: "1 Wall Street", gender: "male", country_code: "+234", phone_number: "9075432113"})

db.users.insertOne({_id: 2, name: "user_2", email: "user_2@example.com", password: "user_5678", address: "34 Buck Street", gender: "female", country_code: "+061", phone_number: "8019220002"})

db.users.insertOne({_id: 3, name: "user_3", email: "user_3@example.com", password: "user_91011", address: "2 Stone Street", gender: "male", country_code: "+114", phone_number: "7098562762"})

db.users.insertOne({_id: 3, name: "user_4", email: "user_4@example.com", password: "user_1213", address: "7 Wellington Street", gender: "male", country_code: "+254", phone_number: "8033278654"})

//Insert into customers
db.customers.insertOne({_id: 1, name: "user_1", email: "user_1@example.com", address: "1 Wall Street", gender: "male", phone_number: "9075432113", user_id: 1})

db.customers.insertOne({_id: 2, name: "user_2", email: "user_2@example.com", address: "34 Buck Street", gender: "female", phone_number: "8019220002", user_id: 2})

db.customers.insertOne({_id: 3, name: "user_3", email: "user_3@example.com", address: "2 Stone Street", gender: "male", phone_number: "7098562762", user_id: 3})

//Insert into admins
db.admins.insertOne({_id: 1, name: "user_1", status: "admin", user_id: 1})
db.admins.insertOne({_id: 2, name: "user_4", status: "super_admin", user_id: 4})

//Insert into items
db.items.insertOne({_id: 1, name: "item_1", price: 100.20, size: "medium", colour_id: 1, available: true, category_id: 1})

db.items.insertOne({_id: 2, name: "item_2", price: 450.11, size: "large", colour_id: 2, available: true, category_id: 2})

db.items.insertOne({_id: 3, name: "item_3", price: 23.35, size: "small", colour_id: 3, available: true, category_id: 3})

db.items.insertOne({_id: 4, name: "item_4", price: 123.35, size: "medium", colour_id: 2, available: true, category_id: 1})

//Insert into item_colours
db.item_colours.insertMany([{_id: 1, item_id: 1, colour_id: 1}, {_id: 2, item_id: 2, colour_id: 2}, {_id: 3, item_id: 3, colour_id: 3}, {_id: 1, item_id: 4, colour_id: 2}])

//Insert into orders
db.orders.insertOne({_id: 1, item_id: 1, customer_id: 1, status: "approved", created_at: Date()})
db.orders.insertOne({_id: 2, item_id: 1, customer_id: 2, status: "approved", created_at: Date()})
db.orders.insertOne({_id: 3, item_id: 2, customer_id: 3, status: "pending", created_at: Date()})

//Getting all documents from users
db.users.find()

//Getting all documents from orders
db.orders.find()

//Update phone number of user_2 in the users collection
db.users.updateOne({_id: 2}, {$set: {phone_number: "8056743328"}})

//Update order status of _id: 3 in orders collection
db.orders.updateOne({_id: 3}, {$set: {status: "approved"}})


//Delete user_4 from users collections
db.users.deleteOne({_id: 4})

//Delete _id: 2 from admins collections
db.admins.deleteOne({_id: 2})
