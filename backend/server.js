const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const apiRoutes = require('./routes');
const { notFoundHandler, errorHandler } = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to the RentRight API',
    data: {
      version: '1.0.0',
      health: '/api/health',
    },
  });
});

app.use('/api', apiRoutes);
app.use(notFoundHandler);
app.use(errorHandler);

const server = app.listen(PORT, () => {
  console.log(`========================================`);
  console.log(`🚀 RentRight Server running on port ${PORT}`);
  console.log(`📡 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🩺 Health check: http://localhost:${PORT}/api/health`);
  console.log(`========================================`);
});

module.exports = { app, server };
