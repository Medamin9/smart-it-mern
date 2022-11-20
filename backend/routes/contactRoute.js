
const express = require("express");

const router =express.Router();

const {contacter} = require("../Controllers/contactController")

router.post("/contacter",contacter);

module.exports = router;