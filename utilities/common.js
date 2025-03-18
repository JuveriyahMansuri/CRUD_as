const db = require("../config/db_connection");
class Common {
  sendResponse = (res, statusCode, code, message, data) => {
    const response = { code, message };
    if (data) response.data = data;
    res.status(statusCode).json(response);
  };

  // Common Function: Check Unique Email
  checkUniqueEmail = async (email) => {
    const checkEmailQuery = "SELECT id FROM tbl_user WHERE email = ?";
    try {
      const [rows] = await db.query(checkEmailQuery, [email]);
      return rows.length === 0; // True if unique, False if exists
    } catch (err) {
      throw err;
    }
  };

}

module.exports = new Common();
