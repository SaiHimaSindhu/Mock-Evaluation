import express from "express";
import fs from "fs";

import productRoutes from "./routes/products.routes.js";
import orderRoutes from "./routes/orders.routes.js";
import analyticsRoutes from "./routes/analytics.routes.js";

const app = express();
app.use(express.json());

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/analytics", analyticsRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
