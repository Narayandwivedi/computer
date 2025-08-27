const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  // Basic Product Information
  name: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    unique: true,
    required: false,
    lowercase: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  
  // Product Classification
  category: {
    type: String,
    required: true,
    enum: ['pc-parts', 'pc-builds', 'gaming-laptops', 'gaming-accessories']
  },
  subCategory: {
    type: String,
    required: true,
    enum: ['graphics-card', 'processors', 'motherboards', 'memory', 'storage', 'monitors', 'keyboard', 'mouse', 'headset']
  },

  // Brand and Model
  brand: {
    type: String,
    required: true,
    trim: true
  },
  model: {
    type: String,
    trim: true
  },
  
  // Inventory Management
  sku: {
    type: String,
    unique: true,
    required: false,
    uppercase: true
  },
  
  // Pricing
  price: {
    type: Number,
    required: true,
    min: 0
  },
  originalPrice: {
    type: Number,
    min: 0
  },

  // Physical Properties
  weight: {
    type: Number, // in grams
    min: 0
  },
  dimensions: {
    length: { type: Number, min: 0 }, // in cm
    width: { type: Number, min: 0 },
    height: { type: Number, min: 0 }
  },
  
  // Inventory
  stockQuantity: {
    type: Number,
    required: false,
    min: 0,
    default: 0
  },
  
  // Media
  images: [{
    type: String // Image URLs
  }],
  
  // FLEXIBLE SPECIFICATIONS - Key Feature!
  specifications: {
    type: Map,
    of: String,
    default: new Map()
  },
  
  // Key Features Array
  features: [{
    type: String,
    trim: true
  }],
  
  // SEO Fields
  metaTitle: {
    type: String,
    maxlength: 60
  },
  metaDescription: {
    type: String,
    maxlength: 160
  },
  keywords: [{
    type: String,
    lowercase: true
  }],
  
  // Warranty Information
  warranty: {
    type: Number, // warranty period in years
    min: 0,
    default: 1
  },
  
  // Status
  isActive: {
    type: Boolean,
    default: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  }
  
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);