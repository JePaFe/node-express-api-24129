const express = require("express");
const router = express.Router();

const controller = require("../controllers/auth.controller");

const authMiddleware = require("../middlewares/authMiddleware");

router.post("/register", controller.register);
router.post("/login", controller.login);

router.get("/protected", authMiddleware, (req, res) => {
  res.send(`Hola User ${req.userId}`);
});

module.exports = router;
