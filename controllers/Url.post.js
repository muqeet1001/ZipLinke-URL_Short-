const Url = require("../model/urlScheme");
const shortid = require("shortid");
async function createShortUrl(req, res) {
  const longUrl = req.body.longUrl;
  const shortId = shortid.generate();
  const newUrl = await Url.create({
    longUrl: longUrl,
    shortid: shortId,
    visitHistory: [],
  });
  return res.json(newUrl);
}

async function getURl(req, res) {
  try {
    const shortId = req.params.shortid;
    // find the document by `shortid`, push a visit timestamp and return the updated doc
    const redirectUrl = await Url.findOneAndUpdate(
      { shortid: shortId },
      { $push: { visitHistory: { timestamp: Date.now() } } },
      { new: true }
    );

    if (!redirectUrl) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    return res.redirect(redirectUrl.longUrl);
  } catch (err) {
    console.error("Error in redirect route:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {createShortUrl, getURl};
