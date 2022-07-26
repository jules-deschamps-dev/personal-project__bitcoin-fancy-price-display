const express = require("express");
const router = express.Router();
const coins = require("../controllers/controls.coins");

router.get("/", coins.bitcoin);
//router.get("/:coin", coins);

module.exports = router;
