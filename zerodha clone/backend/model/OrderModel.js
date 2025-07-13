const {model} = require("mongoose");

const {OrdersSchema} = require("../schemas/Orderschema");

const OrderModel = new model("order", OrdersSchema);

module.exports = {OrderModel};