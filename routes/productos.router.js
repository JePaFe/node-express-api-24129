const express = require("express");
const router = express.Router();

const controller = require("../controllers/productos.controller");

// El prefijo /productos

router.get("/", controller.index);

// /productos/3/categoria/5?order=nombre&limit=10

router.get("/:id", controller.show);
router.post("/", controller.store);
router.put("/:id", controller.update);
router.delete("/:id", controller.destroy);

module.exports = router;
