const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

// Ruta para iniciar sesión

router.post("/login", authController.login);

module.exports = router;

