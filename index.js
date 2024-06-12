const exp = require("constants");
const express = require("express");
const app = express();

const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// const productosRouter = require("./routes/productos.router");
// app.use("/productos", productosRouter);

app.use("/productos", require("./routes/productos.router"));

app.get("/", (req, res) => {
  res.send("Hola desde Express!!");
});

app.get("/factura", (req, res) => {
  // Login
  res.sendFile(path.join(__dirname, "private", "factura.html"));
});

app.get("/frutas", (req, res) => {
  console.log(req.query);
  res.sendFile(path.join(__dirname, "frutas.json"));
});

app.get("/productos/:id", (req, res) => {
  console.log(req.params.id);
  res.send("Producto: " + req.params.id);
});

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
