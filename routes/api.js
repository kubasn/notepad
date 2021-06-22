const express = require("express");
const router = express.Router();
const { homepage } = require("../actions/api/test");

//chce powiedzieć pod ścieżką główną zaczytaj to test aaction
router.get("/", homepage);

module.exports = router;
