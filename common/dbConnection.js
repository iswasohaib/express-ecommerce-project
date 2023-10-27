// Import the 'config' object from the "../config" file.
const config = require("../config");

// Import 'sequelize' and 'Sequelize' classes from the "sequelize" library.
const { sequelize, Sequelize } = require("sequelize");

// Create a new Sequelize instance named 'database' using the database configuration from 'config.db'.
var database = new Sequelize(config.db);

// Try to authenticate the database connection.
database
  .authenticate()
  .then(() => {
    console.log("Database Created");
  })
  .catch((err) => {
    console.log(err);
  });

// Export the 'database' object to be used in other parts of the application.
module.exports = database;
