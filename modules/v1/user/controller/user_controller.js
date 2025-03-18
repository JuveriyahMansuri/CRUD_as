const codes = require("../../../../utilities/response_error_code");
const common = require("../../../../utilities/common");
const userModel = require("../model/user_model");

class User_Controller {
  // Sample Test API
  sampleAPI = (req, res) => {
    common.sendResponse(
      res,
      codes.predefine_code.SUCCESS,
      codes.custom_code.SUCCESS,
      "Server with MySQL Pool is running."
    );
  };

  // Create User
  createUser = async (req, res) => {
    const { name, email, age, phone, address } = req.body;

    // Basic Validation
    if (!name || !email || !age || !phone || !address) {
      return common.sendResponse(
        res,
        codes.predefine_code.BAD_REQUEST,
        codes.custom_code.VALIDATION_ERROR,
        "All fields (name, email, age, phone, address) are required."
      );
    }

    try {
      // Check if email is unique
      const isUnique = await common.checkUniqueEmail(email);
      if (!isUnique) {
        return common.sendResponse(
          res,
          codes.predefine_code.BAD_REQUEST,
          codes.custom_code.ALREADY_EXISTS,
          "Email already exists."
        );
      }
      const result = await userModel.createUser(req.body);
      if (result.affectedRows > 0) {
        common.sendResponse(
          res,
          codes.predefine_code.CREATED,
          codes.custom_code.SUCCESS,
          "User created successfully."
        );
      } else {
        common.sendResponse(
          res,
          codes.predefine_code.BAD_REQUEST,
          codes.custom_code.OPERATION_FAILED,
          "Failed to create user."
        );
      }
    } catch (err) {
      console.error(err);
      common.sendResponse(
        res,
        codes.predefine_code.INTERNAL_ERROR,
        codes.custom_code.OPERATION_FAILED,
        "Internal server error."
      );
    }
  };

  // Get All Users
  getAllUsers = async (req, res) => {
    try {
      const users = await userModel.getAllUsers();
      if (users) {
        common.sendResponse(
          res,
          codes.predefine_code.SUCCESS,
          codes.custom_code.SUCCESS,
          "Users fetched successfully.",
          users
        );
      } else {
        common.sendResponse(
          res,
          codes.predefine_code.NOT_FOUND,
          codes.custom_code.NO_DATA_FOUND,
          "No users found."
        );
      }
    } catch (err) {
      console.error(err);
      common.sendResponse(
        res,
        codes.predefine_code.INTERNAL_ERROR,
        codes.custom_code.OPERATION_FAILED,
        "Internal server error."
      );
    }
  };

  // Get User by ID
  getUserById = async (req, res) => {
    const userId = req.params.id;

    if (!userId || isNaN(userId)) {
      return common.sendResponse(
        res,
        codes.predefine_code.BAD_REQUEST,
        codes.custom_code.VALIDATION_ERROR,
        "Valid user ID is required."
      );
    }

    try {
      const user = await userModel.getUserById(userId);
      if (user) {
        common.sendResponse(
          res,
          codes.predefine_code.SUCCESS,
          codes.custom_code.SUCCESS,
          "User fetched successfully.",
          user
        );
      } else {
        common.sendResponse(
          res,
          codes.predefine_code.NOT_FOUND,
          codes.custom_code.NO_DATA_FOUND,
          "User not found."
        );
      }
    } catch (err) {
      console.error(err);
      common.sendResponse(
        res,
        codes.predefine_code.INTERNAL_ERROR,
        codes.custom_code.OPERATION_FAILED,
        "Internal server error."
      );
    }
  };

  // Update User
  updateUser = async (req, res) => {
    const userId = req.params.id;
    //const { name, email, age, phone, address } = req.body;

    if (!userId || isNaN(userId)) {
      return common.sendResponse(
        res,
        codes.predefine_code.BAD_REQUEST,
        codes.custom_code.VALIDATION_ERROR,
        "Valid user ID is required."
      );
    }

    try {
      const result = await userModel.updateUser(userId, req.body);
      if (result.affectedRows > 0) {
        common.sendResponse(
          res,
          codes.predefine_code.SUCCESS,
          codes.custom_code.SUCCESS,
          "User updated successfully."
          //result
        );
      } else {
        common.sendResponse(
          res,
          codes.predefine_code.NOT_FOUND,
          codes.custom_code.NO_DATA_FOUND,
          "User not found."
        );
      }
    } catch (err) {
      console.error(err);
      common.sendResponse(
        res,
        codes.predefine_code.INTERNAL_ERROR,
        codes.custom_code.OPERATION_FAILED,
        "Internal server error."
      );
    }
  };

  // Delete User
  deleteUser = async (req, res) => {
    const userId = req.params.id;

    if (!userId || isNaN(userId)) {
      return common.sendResponse(
        res,
        codes.predefine_code.BAD_REQUEST,
        codes.custom_code.VALIDATION_ERROR,
        "Valid user ID is required."
      );
    }

    try {
      const result = await userModel.deleteUser(userId);
      if (result.affectedRows > 0) {
        common.sendResponse(
          res,
          codes.predefine_code.SUCCESS,
          codes.custom_code.SUCCESS,
          "User deleted successfully."
        );
      } else {
        common.sendResponse(
          res,
          codes.predefine_code.NOT_FOUND,
          codes.custom_code.NO_DATA_FOUND,
          "User not found."
        );
      }
    } catch (err) {
      console.error(err);
      common.sendResponse(
        res,
        codes.predefine_code.INTERNAL_ERROR,
        codes.custom_code.OPERATION_FAILED,
        "Internal server error."
      );
    }
  };
}

module.exports = new User_Controller();
