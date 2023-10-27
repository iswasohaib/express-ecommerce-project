var express = require("express");
var router = express.Router();

const { categoryContoller } = require("../controller");

router.get("/", categoryContoller.getCategory);
router.post("/", categoryContoller.createCategory);

module.exports = router;
