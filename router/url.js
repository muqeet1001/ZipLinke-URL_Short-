const express = require("express");
const Url = require("../model/urlScheme");
const {createShortUrl ,getURl}= require("../controllers/Url.post");
const router = express.Router();

router.post("/short", createShortUrl);
router.get("/:shortid",getURl); 
router.get("/analytics/:shortid",  async (req,res)=>{
    const shortId = req.params.shortid;
    try {
      const urlData = await Url.findOne({ shortid: shortId });
      if (!urlData) {
        return res.status(404).json({ error: "Short URL not found" });
      }   
      return res.json({
        visitHistory: urlData.visitHistory,
      });
    } catch (err) {
      console.error("Error in analytics route:", err);
      return res.status(500).json({ error: "Internal server error" });    
}
});
module.exports = router;
