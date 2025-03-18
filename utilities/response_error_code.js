
const custom_code = {
    OPERATION_FAILED: "0",
    SUCCESS: "1",
    NO_DATA_FOUND: "2",
    MISSING_FIELDS: "13",
    ALREADY_EXISTS: "14",
    VALIDATION_ERROR:"15"
  };

  const predefine_code = {
    SUCCESS: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INTERNAL_ERROR: 500
  };

module.exports = {custom_code,predefine_code};
