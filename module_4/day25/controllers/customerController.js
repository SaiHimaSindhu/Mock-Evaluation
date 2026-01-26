const supabase = require('../supabaseClient.js');

exports.registerCustomer = async (req, res) => {
  try {
    const { full_name, email, phone } = req.body;

    const { data, error } = await supabase
      .from('customers')
      .insert([{ full_name, email, phone }])
      .select();   // 🔥 very important

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
