const express = require("express");
const router = express.Router();
const controller = require("../controllers/busesController");

router.post("/", controller.addBus);
router.get("/available/:seats", controller.getAvailableBuses);

module.exports = router;
