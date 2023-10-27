const categoryService = require("../../service/categoryService");
module.exports = {
  getCategory: async (req, res) => {
    const data = await categoryService.getCategory();
    res.send(data);
  },
  createCategory: async (req, res) => {
    const data = await categoryService.createCategory(req.body);
    res.send(data);
  },
  createCategoryHelper: async (data) => {
    const categoryData = await categoryService.createCategory(data);
    return categoryData;
  },
};
