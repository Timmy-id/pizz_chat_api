const express = require("express");
const allUsers = require("../controllers/users.controller");
const { authorize } = require("../middlewares/authorize");

const router = express.Router();

router.get("/", authorize, allUsers);

module.exports = router;
