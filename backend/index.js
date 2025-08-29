require('dotenv').config();
const express = require('express');
const cors = require('cors')
const connectToDb = require('./config/mongodb');
const productRoutes = require('./routes/productRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const userRoutes = require('./routes/userRoutes');
const adminUserRoutes = require('./routes/adminUserRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174']
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static file serving for uploaded images
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/products', productRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admin/users', adminUserRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Computer Store API Server' });
});

// Connect to MongoDB and start server
const startServer = async () => {
  try {
    await connectToDb();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();