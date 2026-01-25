const express = require('express');
const router = express.Router();
const { registerCustomer } = require('../controllers/customerController');
const { validateCustomer } = require('../validations/validate');

router.post('/register', validateCustomer, registerCustomer);

module.exports = router;
