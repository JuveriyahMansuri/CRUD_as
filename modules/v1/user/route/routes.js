const userController = require("../controller/user_controller");

// custom route function : V1
const customRoutes = (app) => {
  // Test API
  app.get("/v1/user/test-api", userController.sampleAPI);

  // Routes
  app.post("/v1/user/add-user", userController.createUser);
  app.get("/v1/user/get-all-user", userController.getAllUsers);
  app.get("/v1/user/get-single-user/:id", userController.getUserById);
  app.put("/v1/user/update-user/:id", userController.updateUser);
  app.delete("/v1/user/delete-user/:id", userController.deleteUser);
};

module.exports = customRoutes;
