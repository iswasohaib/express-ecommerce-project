// Import the 'DataTypes' object from the 'sequelize' library.
const { DataTypes } = require("sequelize");

// Import the database connection instance from a relative path.
let sequelize = require("../../../common/dbConnection");

// Define a Sequelize model named 'student' with associated attributes.
const carts = sequelize.define(
  "carts",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    total_items: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    // Define additional options for the 'student' model.
    timestamps: true, // Automatically add 'createdAt' and 'updatedAt' fields.
    paranoid: true, // Enable soft deletion, marking rows as deleted.
    sequelize, // Associate the model with the 'sequelize' instance.
    modelName: "carts", // Set the name of the model explicitly.
  }
);

// Export the 'student' model so it can be used in other parts of the application.
module.exports = carts;

//In summary, this code defines a Sequelize model named "student" with specific attributes and options, and then exports this model for use in other parts of the application. The model represents a database table for storing student data with fields like 'id,' 'rollnumber,' 'department,' and 'semester,' each with its data type and constraints. Additionally, the model includes options for automatically managing timestamps and enabling soft deletions.
