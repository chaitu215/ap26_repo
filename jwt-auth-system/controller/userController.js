const pool = require("../config/db");

// ** Get User Profile (Admins & Users Only) **
const getProfile = async (req, res) => {
  try {
    const user = await pool.query("SELECT id, username, email, role FROM users WHERE id = $1", [req.user.id]);
    
    if (!user.rows.length) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user.rows[0]); // ✅ Managers can now access their profile
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ** Admin Access **
const adminAccess = async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Forbidden: Only admins can access this page" });
  }

  try {
    const users = await pool.query("SELECT id, username, email, role FROM users");
    res.json({ users: users.rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ** Manager Access **
const managerAccess = async (req, res) => {
  if (req.user.role !== "admin" && req.user.role !== "manager") {
    return res.status(403).json({ message: "Forbidden: Only managers and admins can access this page" });
  }

  try {
    const reports = [
      { id: 1, title: "Monthly Sales Report", date: "2024-02-18" },
      { id: 2, title: "Employee Performance", date: "2024-02-15" }
    ];
    
    res.json({ reports });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getProfile, adminAccess, managerAccess };