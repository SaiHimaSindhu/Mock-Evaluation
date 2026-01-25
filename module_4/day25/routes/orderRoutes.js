const express = require('express');
const router = express.Router();
const order = require('../controllers/orderController');
const { validateOrder } = require('../validations/validate');

router.post('/add-order', validateOrder, order.createOrder);
router.get('/get-my-orders/:customerId', order.getCustomerOrders);
router.put('/update-order/:orderId', order.updateOrder);
router.delete('/delete-order/:orderId', order.deleteOrder);

module.exports = router;
