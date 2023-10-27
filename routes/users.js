// Import the express module.
var express = require("express");

// Create a router instance.
var router = express.Router();

// Import the controllers.
const { userController, authController } = require("../controller");

/* GET users listing. */
// Define routes for handling HTTP GET and POST requests.
router.get("/", authController.authenticateToken, userController.getUser);
router.post("/", userController.register);
router.post("/login", authController.login);

// Export the router for use in the application.
module.exports = router;
