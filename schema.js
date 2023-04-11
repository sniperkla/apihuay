const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const lotterySchema = new Schema({
  name: String,
  date: String,
  prize1: String,
  lower2: String,
  upper3: String,
  lower3: String,
  upper3_front: String,
  lower3_front: String,
  extra: String,
});

module.exports = mongoose.model("Lottery", lotterySchema, "Lottrery");
