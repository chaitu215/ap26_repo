require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Import Routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000"}));

// Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));