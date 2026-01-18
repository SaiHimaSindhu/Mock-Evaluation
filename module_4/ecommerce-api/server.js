// server.js
const express = require("express");
const fs = require("fs");
const path = require("path");

const productsRoutes = require("./routes/products.routes");
const ordersRoutes = require("./routes/orders.routes");
const analyticsRoutes = require("./routes/analytics.routes");

const app = express();
app.use(express.json());

app.use("/products", productsRoutes);
app.use("/orders", ordersRoutes);
app.use("/analytics", analyticsRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
