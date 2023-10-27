const cartService = require("../../service/cartService");
module.exports = {
  getCart: async (req, res) => {
    const cart = await cartService.getCart(req.body);
    res.send(cart);
  },

  createCart: async (req, res) => {
    const result = await cartService.createCart(req.body, req.params.productID);
    res.send(result);
  },

  deleteCart: async (req, res) => {
    const result = await cartService.deleteCart(
      req.params.cartID,
      req.params.productID
    );
    console.log("result", result);
    res.send("Product from cart deleted");
  },
};
