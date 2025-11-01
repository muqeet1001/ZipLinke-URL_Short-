const express = require("express");
const ConnectToDb = require("./db/db");
const path = require("path");
const Url = require("./model/urlScheme");
const urlRouter = require("./router/url");
const { log } = require("console");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
// set views to the views directory (not to a single file)
app.set("views", path.resolve(__dirname, "views"));
app.use(express.json());
app.get("/api/test", async (req, res) => {
  // Only fetch documents that actually have a longUrl to avoid `undefined` showing in the view
  const allurls = await Url.find({ longUrl: { $exists: true, $ne: "" } });
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' http://localhost:3000 'unsafe-inline' 'unsafe-eval'"
  );

  res.render("home", {
    urls: allurls,
  });
});

app.use("/", urlRouter);
app.listen(port, () => {
  console.log("port is running in server 3000");
  ConnectToDb();
});
