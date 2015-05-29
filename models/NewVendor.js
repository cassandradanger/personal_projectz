var mongoose = require('mongoose');

var VendorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    company: String,
    phone: Number,
    email: String,
    address: String,
    description: String,
    created_on: { type:Date, default: new Date() }
});

console.log("Vendor Model Loaded");
module.exports = mongoose.model('NewVendor', VendorSchema);
