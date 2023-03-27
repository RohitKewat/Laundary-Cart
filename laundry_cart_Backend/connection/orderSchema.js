//this schema will act as the end db where all the orders will reside.

//it will be fetched in the checkout component where after the order is finalised, a post request will add an entry in the related model

const mongoose = require("mongoose");
//it will have items, totalprice, quantity, orderDate

let orderSchema = new mongoose.Schema({
    items: [
        {
            productName: String,
            quantity: Number,
            price: Number,
            
        }
    ],
    userId: String,
    userAddress: String,
    billAmt: Number,
    storeName: String,
    orderDate: String,
});

exports.orderSchema = orderSchema;
