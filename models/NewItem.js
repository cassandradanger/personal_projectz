var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
    itemType: String,
    vendor: String,
    purchaseID: {type: Number, default: Math.random()},
    itemName: String,
    description: String,
    quantity: Number,
    price: Number,
    consignRate: Number,
    created_on: { type:Date, default: new Date() }
});

console.log("Item Model Loaded");
console.log(ItemSchema.purchaseID);
module.exports = mongoose.model('NewItem', ItemSchema);