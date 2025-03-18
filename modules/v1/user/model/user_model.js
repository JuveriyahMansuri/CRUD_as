const db = require('../../../../config/db_connection');

class User_Model {
  async createUser(data) {
    const { name, email, age, phone, address } = data;
    const addUserQuery = "INSERT INTO tbl_user (name, email, age, phone, address) VALUES (?, ?, ?, ?, ?)";
    try {
      const [result] = await db.query(addUserQuery, [name, email, age, phone, address]);
      return result;
    } catch (err) {
      throw err;
    }
  }

  async getAllUsers() {
    const getAllUserQuery = "SELECT * FROM tbl_user";
    try {
      const [results] = await db.query(getAllUserQuery);
      return results;
    } catch (err) {
      throw err;
    }
  }

  async getUserById(userId) {
    const getUserQuery = "SELECT * FROM tbl_user WHERE id = ?";
    try {
      const [result] = await db.query(getUserQuery, [userId]);
      return result[0]; // First row
    } catch (err) {
      throw err;
    }
  }

  async updateUser(userId, updateData) {
    const updateQuery = "UPDATE tbl_user SET ? WHERE id = ?";
    try {
      const [result] = await db.query(updateQuery, [updateData, userId]);
      return result;
    } catch (err) {
      throw err;
    }
  }

  async deleteUser(userId) {
    const deleteQuery = "DELETE FROM tbl_user WHERE id = ?";
    try {
      const [result] = await db.query(deleteQuery, [userId]);
      return result;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new User_Model();
