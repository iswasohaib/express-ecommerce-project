var express = require("express");
var router = express.Router();

const { productController } = require("../controller");

router.get("/", productController.getProduct);
router.get("/", productController.getProductbyid);
router.post("/", productController.createProduct);
router.put("/:productID", productController.updateProduct);
router.delete("/:productID", productController.deleteProduct);

module.exports = router;
