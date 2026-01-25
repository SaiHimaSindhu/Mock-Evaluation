const supabase = require('../supabaseClient');

exports.registerCustomer = async (req, res) => {
  try {
    const { full_name, email, phone } = req.body;

    const { data, error } = await supabase
      .from('customers')
      .insert([{ full_name, email, phone }]);

    if (error) {
      if (error.message.includes('duplicate')) {
        return res.status(409).json({ error: "Email already exists" });
      }
      throw error;
    }

    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
