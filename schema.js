const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const lotterySchema = new Schema({
  name: String,
  date: String,
  first: String,
  below3: String,
  front3: String,
  below2: String,
  upper3: String,
});

module.exports = mongoose.model("Lottery", lotterySchema, "Lottery");
