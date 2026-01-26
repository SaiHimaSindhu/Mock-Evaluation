exports.validateCustomer = (req, res, next) => {
  const { full_name, email, phone } = req.body;
  if (!full_name || !email || !phone) {
    return res.status(400).json({ error: "All fields required" });
  }
  next();
};

exports.validateOrder = (req, res, next) => {
  const { product_name, quantity, price, customerId } = req.body;
  if (!product_name || !quantity || !price || !customerId) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  next();
};
