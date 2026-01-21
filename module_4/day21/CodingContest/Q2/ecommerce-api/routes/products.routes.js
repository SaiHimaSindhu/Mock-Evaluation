import express from "express";
import fs from "fs";

const router = express.Router();

router.get("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync("db.json"));
  res.status(200).json(data.products);
});

export default router;
