const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const productsPath = path.join(__dirname, "data", "products.json");
const ordersPath = path.join(__dirname, "data", "orders.json");

function readJson(filePath) {
  if (!fs.existsSync(filePath)) return [];
  const raw = fs.readFileSync(filePath, "utf-8");
  return raw ? JSON.parse(raw) : [];
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

app.get("/api/products", (req, res) => {
  const products = readJson(productsPath);
  res.json(products);
});

app.post("/api/create-order", (req, res) => {
  const { productId, customerName } = req.body;
  const products = readJson(productsPath);
  const orders = readJson(ordersPath);

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({ error: "Product tapılmadı" });
  }

  const order = {
    id: "ORD-" + Date.now(),
    productId: product.id,
    productName: product.name,
    amount: product.price,
    customerName: customerName || "",
    status: "pending",
    createdAt: new Date().toISOString()
  };

  orders.push(order);
  writeJson(ordersPath, orders);

  res.json(order);
});

app.get("/api/order-status/:id", (req, res) => {
  const orders = readJson(ordersPath);
  const order = orders.find((o) => o.id === req.params.id);

  if (!order) {
    return res.status(404).json({ error: "Order tapılmadı" });
  }

  res.json(order);
});

// demo üçün manual payment success
app.post("/api/mark-paid/:id", (req, res) => {
  const orders = readJson(ordersPath);
  const orderIndex = orders.findIndex((o) => o.id === req.params.id);

  if (orderIndex === -1) {
    return res.status(404).json({ error: "Order tapılmadı" });
  }

  orders[orderIndex].status = "paid";
  orders[orderIndex].paidAt = new Date().toISOString();

  writeJson(ordersPath, orders);

  res.json({ success: true, order: orders[orderIndex] });
});

app.listen(PORT, () => {
  console.log(`Server işləyir: http://localhost:${PORT}`);
});