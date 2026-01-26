const supabase = require('../supabaseClient');

// CREATE ORDER
exports.createOrder = async (req, res) => {
  try {
    const { product_name, quantity, price, customerId } = req.body;

    const { data, error } = await supabase
      .from('orders')
      .insert([{ product_name, quantity, price, customer_id: customerId }]);

    if (error) throw error;

    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET CUSTOMER ORDERS
exports.getCustomerOrders = async (req, res) => {
  try {
    const { customerId } = req.params;

    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('customer_id', customerId);

    if (error) throw error;

    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// UPDATE ORDER
exports.updateOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    const { data, error } = await supabase
      .from('orders')
      .update(req.body)
      .eq('id', orderId);

    if (error) throw error;

    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE ORDER
exports.deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    const { error } = await supabase
      .from('orders')
      .delete()
      .eq('id', orderId);

    if (error) throw error;

    res.json({ message: "Order deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
