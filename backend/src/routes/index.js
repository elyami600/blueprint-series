const express = require('express');
const router = express.Router();
const eventRoutes = require('./eventRoutes');

// Health check
router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString(),
  });
});

// Mount event routes at /api
router.use('/api', eventRoutes);

module.exports = router;
