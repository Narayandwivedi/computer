const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  
  // Simple Category Enum
  category: {
    type: String,
    required: true,
    enum: ['pc-parts', 'pc-builds', 'gaming-laptops', 'gaming-accessories']
  },
  
  brand: {
    type: String,
    required: true,
    trim: true
  },
  
  price: {
    type: Number,
    required: true,
    min: 0
  },
    originalPrice: {
    type: Number,
    min: 0
  },


  weight: {
    type: Number, // in grams
    min: 0
  },
  dimensions: {
    length: { type: Number, min: 0 }, // in cm
    width: { type: Number, min: 0 },
    height: { type: Number, min: 0 }
  },
  
  
  stockQuantity: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },
  
  images: [{
    type: String // Just image URLs
  }],
  
  isActive: {
    type: Boolean,
    default: true
  }
  
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);