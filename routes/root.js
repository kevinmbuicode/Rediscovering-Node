const express = require("express");
const router = express.Router();
const path = require("path");

router.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, '..', "views", "index.html"));
});

router.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, '..', "views", "new-page.html"));
});

router.get("/old-page(.html)?", (req, res) => {
  //Status code 301 means Moved Permanently. Browser redirects to the new URL and search engines update their links to the resource
  res.redirect(301, "new-page.html");
});

module.exports = router