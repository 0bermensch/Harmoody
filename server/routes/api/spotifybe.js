const express = require("express");
const router = express.Router();

const SpotifyWebApi = require("spotify-web-api-node");
scopes = [
  "user-read-private",
  "user-read-email",
  "playlist-modify-public",
  "playlist-modify-private"
];

require("dotenv").config();

const myClientId = "2e3fc843ed7c4456a27ac34c6dd1766a";
const myClientSecret = "96fd66ae5bb843ab9ab39e6e4115e723";

// const spotifyApi = new SpotifyWebApi({
//   clientId: process.env.${myClientId},
//   clientSecret: process.env.${myClientSecret},
//   redirectUri: process.env.CALLBACK_URL
// });

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/login", (req, res) => {
  const html = spotifyApi.createAuthorizeURL(scopes);
  console.log(html);
  res.send(html + "&show_dialog=true");
});

router.get("/callback", async (req, res) => {
  const { code } = req.query;
  console.log(code);
  try {
    var data = await spotifyApi.authorizationCodeGrant(code);
    const { access_token, refresh_token } = data.body;
    spotifyApi.setAccessToken(access_token);
    spotifyApi.setRefreshToken(refresh_token);

    res.redirect("http://localhost:3001/home");
  } catch (err) {
    res.redirect("/#/error/invalid token");
  }
});

module.exports = router;
