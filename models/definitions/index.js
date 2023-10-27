let sequelize = require("../../common/dbConnection");

let users = require("./users/users");
let categories = require("./users/categories");
const products = require("./users/products");
const carts = require("./users/carts");

users.hasOne(carts, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});
carts.belongsTo(users, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});
categories.hasMany(products, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
  foreignKey: { name: "categoryID", allowNull: false, unique: true },
});
products.belongsTo(categories, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
  foreignKey: { name: "categoryID", allowNull: false, unique: true },
});
categories.hasMany(products, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
  foreignKey: { name: "productID", allowNull: false, unique: true },
});
products.belongsTo(categories, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
  foreignKey: { name: "categoryID", allowNull: false, unique: true },
});
carts.belongsToMany(products, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
  through: "cartitems",
  foreignKey: { name: "productID", allowNull: false, unique: true },
});
products.belongsToMany(carts, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
  through: "cartitems",
  foreignKey: { name: "cartID", allowNull: false, unique: true },
});
const models = sequelize.models;

console.log(models);

const db = {};

db.sequelize = sequelize;

module.exports = { db, models };
