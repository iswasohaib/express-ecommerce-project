var express = require("express");
var router = express.Router();

const { cartController } = require("../controller");

router.get("/", cartController.getCart);
router.post("/:productID", cartController.createCart);
router.delete("/:cartID/:productID", cartController.deleteCart);

module.exports = router;
