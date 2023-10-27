const { models } = require("../models/definitions");

module.exports = {
  getProduct: async () => {
    const result = await models.products.findAll();
    if (result) {
      return result;
    } else {
      return "Can't find any product";
    }
  },
  getProductbyid: async (id) => {
    try {
      const result = await models.products.findOne({
        where: { id },
        include: [
          {
            model: models.course,
            attributes: ["name"],
            through: { attributes: [] },
          },
        ],
      });
      if (!result) {
        throw new Error("Product not found");
      }
      return result;
    } catch (error) {
      throw new Error(`Error fetching product: ${error.message}`);
    }
  },
  createProduct: async (data) => {
    const result = await models.products.create(data);
    console.log(result);
    return result;
  },
  updateProduct: async (id) => {
    const { id } = req.params;
    const result = await models.products.update(req.body, {
      where: { id: id },
    });
    console.log(result);
    return result;
  },
  deleteProduct: async (id) => {
    const result = await models.products.destroy({ where: { id: id } });
    if (result > 0) {
      console.log("The number of deleted rows is" + result);
      return result;
    } else {
      return "couldn't find the specified product";
    }
  },
};
