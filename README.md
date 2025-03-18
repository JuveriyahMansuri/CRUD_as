
# Setup Instructions

# 1. Install dependencies
```bash
npm install
```

# 2. Configure environment variables  
Create a `.env` file in the root directory:
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=your_database
```

# 3. Run the server
```bash
npm start
```
Server will run at: [http://localhost:5000](http://localhost:5000)

---

# Project Structure
```
project-root/
├── config/
│   ├── constant.js           # Status codes
│   └── db_connection.js      # MySQL DB config
├── modules/v1/user/
│   ├── controllers/
│   │   └── user_controller.js
│   ├── models/
│   │   └── user_model.js
│   └── route/
│       └── routes.js
├── utilities/
│   ├── common.js             # Common helpers (response handler)
│   └── response_error_code.js
├── index.js                  # Entry point
├── package.json
└── README.md
```

---

# API Documentation

All APIs respond with this structure:
```json
{
  "code": "1",
  "message": "Success message",
  "data": { /* optional */ }
}
```

| Code Type        | Description                 |
|------------------|-----------------------------|
| "1"              | Success                     |
| "0"              | Operation Failed            |
| "2"              | No Data Found               |
| "13"             | Missing Fields              |
| "14"             | Already Exists              |
| "15"             | Validation Error            |

# Headers
- `Content-Type: application/json`

---

# API Endpoints

### 1. Sample Test
- **GET** `http://localhost:5000/v1/user/test-api`
- **Response**: Server status message.

---

### 2. Create User
- **POST** `http://localhost:5000/v1/user/add-user`
- **Body**:
```json
{
  "name": "rahul sharma",
  "email": "imrahul50@gmail.com",
  "age": 20,
  "phone": "8724245222",
  "address": "123,mumbai"
}
```
- **Success**: User created.
- **Errors**: Missing fields or internal error.

---

### 3. Get All Users
- **GET** `http://localhost:5000/v1/user/get-all-user`
- **Response**: Array of users.

---

### 4. Get User by ID
- **GET** `http://localhost:5000/v1/user/get-single-user/1`
- **Params**: `id` (numeric)
- **Response**: User data or not found.

---

### 5. Update User
- **PUT** `http://localhost:5000/v1/user/update-user/1`
- **Params**: `id` (numeric)
- **Body**: Any of `name`, `email`, `age`, `phone`, `address`.
- **Success**: User updated.
- **Errors**: Validation or not found.

---

### 6. Delete User
- **DELETE** `http://localhost:5000/v1/user/delete-user/3`
- **Params**: `id` (numeric)
- **Success**: User deleted.
- **Errors**: Validation or not found.

---

# Notes
- All the errors return meaningful status codes and messages.
- It Uses MySQL prepared statements for security.
- Modify `response_error_code.js` for adding custom response codes.

---


