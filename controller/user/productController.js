const productService = require("../../service/productService");
const categoryController = require("./categoryContoller");

module.exports = {
  getProduct: async (req, res) => {
    const data = await productService.getProduct();
    res.send(data);
  },
  getProductbyid: async (req, res) => {
    const data = await productService.getProductbyid(req.params.id);
    res.send(data);
  },
  createProduct: async (req, res) => {
    const { category_name, ...product } = req.body;
    const category = await categoryController.createCategoryHelper({
      category_name: category_name,
    });
    const categoryID = category.id;
    const data = await productService.createProduct({
      categoryID,
      product_name: product.product_name,
      price: product.price,
      inventory: product.inventory,
      description: product.description,
    });
    res.send(data);
  },
  updateProduct: async (req, res) => {
    const product = await productService.updateProduct(req.params.id);
    res.send(product);
  },
  deleteProduct: async (req, res) => {
    const product = await productService.deleteProduct(req.params.id);
    res.send(product);
  },
};
