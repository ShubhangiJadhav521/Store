// routes/storeRoutes.js
const express = require('express');
const router = express.Router();
const Store = require('../models/Store.js');

router.get('/stores', async (req, res) => {
  try {
    const stores = await Store.find().maxTimeMS(30000);
    res.json(stores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
