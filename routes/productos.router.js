const express = require("express");
const router = express.Router();

// El prefijo /productos

const productos = [
  { id: 1, nombre: "Producto Nro 1", stock: 10 },
  { id: 2, nombre: "Producto Nro 2", stock: 5 },
  { id: 3, nombre: "Producto Nro 3", stock: 15 },
];

router.get("/", (req, res) => {
  res.json(productos);
});

// /productos/3/categoria/5?order=nombre&limit=10

router.get("/:id", (req, res) => {
  console.log(req.params.id);

  const producto = productos.find((elemento) => elemento.id == req.params.id);
  if (!producto) {
    res.status(404).json({ error: "No existe el producto" });
  } else {
    res.send(producto);
  }
});

router.post("/", (req, res) => {
  //   console.log(req.body);

  const producto = {
    id: productos.length + 1,
    nombre: req.body.nombre,
    stock: req.body.stock,
  };

  productos.push(producto);

  res.status(201).send(producto);
});

router.put("/:id", (req, res) => {
  //   console.log(req.params);
  //   console.log(req.body);

  const producto = productos.find((elemento) => elemento.id == req.params.id);
  if (!producto) {
    return res.status(404).json({ error: "No existe el producto" });
  }

  producto.nombre = req.body.nombre;
  producto.stock = req.body.stock;

  res.send(producto);
});

router.delete("/:id", (req, res) => {
  const producto = productos.find((elemento) => elemento.id == req.params.id);
  if (!producto) {
    return res.status(404).json({ error: "No existe el producto" });
  }

  const productoIndex = productos.findIndex(
    (elemento) => elemento.id == req.params.id
  );

  productos.splice(productoIndex, 1);

  res.json(producto);
});

module.exports = router;
