const { models } = require("../models/definitions");
const bcrypt = require("bcrypt");
module.exports = {
  getUser: async () => {
    const result = await models.users.findAll();
    return result;
  },

  register: async (data) => {
    const salltRound = 10;
    data.password = bcrypt.hashSync(data.password, salltRound);

    const result = await models.users.create(data);

    console.log(result);
    return result;
  },
  registerUsersHelper: async (data) => {
    const result = await models.users.create(data);
    console.log(result);
    return result;
  },
};
