import express from "express";
import fs from "fs";

const router = express.Router();

// CREATE ORDER
router.post("/", (req, res) => {
  const { productId, quantity } = req.body;
  const data = JSON.parse(fs.readFileSync("db.json"));

  const product = data.products.find(p => p.id === productId);
  if (!product) return res.status(404).json({ message: "Product not found" });

  if (product.stock === 0 || quantity > product.stock) {
    return res.status(400).json({ message: "Insufficient stock" });
  }

  const order = {
    id: Date.now(),
    productId,
    quantity,
    totalAmount: product.price * quantity,
    status: "placed",
    createdAt: new Date().toISOString().split("T")[0]
  };

  product.stock -= quantity;
  data.orders.push(order);

  fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
  res.status(201).json(order);
});

// GET ALL ORDERS
router.get("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync("db.json"));
  res.status(200).json(data.orders);
});

// CANCEL ORDER (SOFT DELETE)
router.delete("/:orderId", (req, res) => {
  const data = JSON.parse(fs.readFileSync("db.json"));
  const order = data.orders.find(o => o.id == req.params.orderId);

  if (!order) return res.status(404).json({ message: "Order not found" });
  if (order.status === "cancelled")
    return res.status(400).json({ message: "Order already cancelled" });

  const today = new Date().toISOString().split("T")[0];
  if (order.createdAt !== today)
    return res.status(400).json({ message: "Cancellation not allowed" });

  order.status = "cancelled";

  const product = data.products.find(p => p.id === order.productId);
  product.stock += order.quantity;

  fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
  res.status(200).json({ message: "Order cancelled successfully" });
});

// CHANGE STATUS
router.patch("/change-status/:orderId", (req, res) => {
  const { status } = req.body;
  const validFlow = ["placed", "shipped", "delivered"];

  const data = JSON.parse(fs.readFileSync("db.json"));
  const order = data.orders.find(o => o.id == req.params.orderId);

  if (!order) return res.status(404).json({ message: "Order not found" });
  if (order.status === "cancelled" || order.status === "delivered")
    return res.status(400).json({ message: "Status change not allowed" });

  const currentIndex = validFlow.indexOf(order.status);
  const nextIndex = validFlow.indexOf(status);

  if (nextIndex !== currentIndex + 1)
    return res.status(400).json({ message: "Invalid status flow" });

  order.status = status;
  fs.writeFileSync("db.json", JSON.stringify(data, null, 2));

  res.status(200).json(order);
});

export default router;
