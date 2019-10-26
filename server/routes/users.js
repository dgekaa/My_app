const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const User = require("../Models/Users");

// Register Handle
router.post("/register", (req, res) => {
  const { name, password, repassword } = req.body;
  res.send({name});
});

// Login Handle
router.post("/login", (req, res) => {
  const { name, password } = req.body;
  res.send({name});
});

module.exports = router;
