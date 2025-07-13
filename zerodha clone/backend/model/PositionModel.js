const {model} = require("mongoose");

const {PositionSchema} = require("../schemas/PositionsSchema");

const PositionModel = model("Position", PositionSchema);

module.exports = {PositionModel};