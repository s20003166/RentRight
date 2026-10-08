const db = require('../config/db');

const getHealth = async (req, res) => {
  const timestamp = new Date().toISOString();

  try {
    await db.query('SELECT 1');

    res.status(200).json({
      success: true,
      message: 'RentRight API running',
      data: {
        timestamp,
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || 'development',
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Database connection failed',
      data: { error: error.message },
    });
  }
};

module.exports = { getHealth };
