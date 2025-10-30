const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
  shortid: {
    type: String,
    require: true,
    unique: true,
  },
  longUrl: {
    type: String,
    require: true,
  },
  visitHistory: [{
    timestamp:{type:Number}
  }]
});
module.exports = mongoose.model("Url", UrlSchema);