
const express = require("express");

const router =express.Router();

const {register} = require("../Controllers/registrationController")

router.post("/registration",register);

module.exports = router;