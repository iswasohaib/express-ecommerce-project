const { models } = require("../models/definitions");

module.exports = {
  getCategory: async () => {
    const result = await models.categories.findAll();
    return result;
  },
  createCategory: async (data) => {
    const result = await models.categories.create(data);
    console.log(result);
    return result;
  },
};
