const express = require("express");
const { register, login } = require("../controllers/auth.controller");

const router = express.Router();

router.post("/api/auth/login", login);
router.post("/api/auth/register", register);

module.exports = router;
