// Import the 'DataTypes' object from the 'sequelize' library.
const { DataTypes } = require("sequelize");

// Import the database connection instance from a relative path.
let sequelize = require("../../../common/dbConnection");

// Define a Sequelize model named 'user' with associated attributes.
const users = sequelize.define(
  "users",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    firstName: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
      validate: { isEmail: true },
    },
    password: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "users",
  }
);

// Export the 'user' model so it can be used in other parts of the application.
module.exports = users;

//In summary, this code defines a Sequelize model named "user" with specific attributes and options, and then exports this model for use in other parts of the application. The model represents a database table for storing user data with fields like 'id,' 'firstName,' 'lastName,' 'email,' and 'phoneNumber,' each with its data type and constraints. The model also includes options for automatically managing timestamps and enabling soft deletions, and it specifies a model name of "user."
