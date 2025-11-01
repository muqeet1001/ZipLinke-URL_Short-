const express = require("express");
const Url = require("../model/urlScheme");
const {createShortUrl ,getURl,analytics}= require("../controllers/Url.post");
const router = express.Router();

router.post("/short", createShortUrl);
router.get("/:shortid",getURl); 
router.get("/analytics/:shortid",analytics);
module.exports = router;
