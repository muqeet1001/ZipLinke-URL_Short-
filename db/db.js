const mongoose = require("mongoose");

async function ConnectToDb() {
  mongoose
    .connect("mongodb+srv://mqt:TpGPufKdapozvn5Y@cluster0.vv5xxxv.mongodb.net/shortUrl")
    .then(() => {
      console.log("Db is connected");
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = ConnectToDb;
