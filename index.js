const express = require("express");
const ConnectToDb = require("./db/db");
const urlRouter = require("./router/url");
const app = express();
const port = 3000;
app.use(express.json());
app.use("/", urlRouter);
app.listen(port, () => {
  console.log("port is running in server 3000");
  ConnectToDb();
});
