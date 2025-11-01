const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
  shortid: {
    type: String,
    required: true,
    unique: true,
  },
  longUrl: {
    type: String,
    required: true,
  },
  visitHistory: [
    {
      timestamp: { type: Number },
    },
  ],
});
module.exports = mongoose.model("Url", UrlSchema);
