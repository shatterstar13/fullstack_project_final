const express = require("express");
const router = express.Router();

const SignAPI = require("../api/signUp");

router.post("/", SignAPI.create);

module.exports = router;
