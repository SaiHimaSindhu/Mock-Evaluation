const express = require('express');

require('dotenv').config();

const customerRoutes = require('./routes/customerRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
app.use(express.json());

app.use('/customer', customerRoutes);
app.use('/order', orderRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
