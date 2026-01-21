import express from "express";
import fs from "fs";

const router = express.Router();

// ALL ORDERS WITH COUNT
router.get("/allorders", (req, res) => {
  const data = JSON.parse(fs.readFileSync("db.json"));
  res.json({ count: data.orders.length, orders: data.orders });
});

// CANCELLED ORDERS
router.get("/cancelled-orders", (req, res) => {
  const data = JSON.parse(fs.readFileSync("db.json"));
  const cancelled = data.orders.filter(o => o.status === "cancelled");
  res.json({ count: cancelled.length, orders: cancelled });
});

// SHIPPED ORDERS
router.get("/shipped", (req, res) => {
  const data = JSON.parse(fs.readFileSync("db.json"));
  const shipped = data.orders.filter(o => o.status === "shipped");
  res.json({ count: shipped.length, orders: shipped });
});

// TOTAL REVENUE BY PRODUCT
router.get("/total-revenue/:productId", (req, res) => {
  const data = JSON.parse(fs.readFileSync("db.json"));
  const product = data.products.find(p => p.id == req.params.productId);

  if (!product) return res.status(404).json({ message: "Product not found" });

  const revenue = data.orders
    .filter(o => o.productId == product.id && o.status !== "cancelled")
    .reduce((sum, o) => sum + o.quantity * product.price, 0);

  res.json({ productId: product.id, totalRevenue: revenue });
});

// OVERALL REVENUE
router.get("/alltotalrevenue", (req, res) => {
  const data = JSON.parse(fs.readFileSync("db.json"));

  const revenue = data.orders
    .filter(o => o.status !== "cancelled")
    .reduce((sum, o) => {
      const product = data.products.find(p => p.id === o.productId);
      return sum + o.quantity * product.price;
    }, 0);

  res.json({ totalRevenue: revenue });
});

export default router;
