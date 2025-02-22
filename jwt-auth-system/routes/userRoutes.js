const express = require("express");
const { getProfile, adminAccess, managerAccess } = require("../controller/userController");
const { verifyToken, checkRole } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/profile", verifyToken, getProfile);
router.get("/admin", verifyToken, checkRole(["admin"]), adminAccess);
router.get("/manager", verifyToken, checkRole(["admin", "manager"]), managerAccess);

module.exports = router;