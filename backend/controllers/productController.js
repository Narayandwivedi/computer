const Product = require('../models/Product');

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      category,
      subCategory,
      brand,
      price,
      originalPrice,
      weight,
      dimensions,
      stockQuantity,
      images,
      isActive
    } = req.body;

    const product = new Product({
      name,
      description,
      category,
      subCategory,
      brand,
      price,
      originalPrice,
      weight,
      dimensions,
      stockQuantity,
      images,
      isActive: isActive !== undefined ? isActive : true
    });

    const savedProduct = await product.save();
    res.status(201).json({
      success: true,
      message: 'Product added successfully',
      data: savedProduct
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

const editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      data: updatedProduct
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    res.status(200).json({
      success: true,
      data: product
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const { subCategory, brand, minPrice, maxPrice, limit = 20, page = 1 } = req.query;
    
    // Build query object
    const query = { category: category, isActive: true };
    
    // Add optional filters
    if (subCategory) query.subCategory = subCategory;
    if (brand) query.brand = new RegExp(brand, 'i'); // Case insensitive
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    // Calculate pagination
    const skip = (Number(page) - 1) * Number(limit);
    
    // Fetch products with pagination
    const products = await Product.find(query)
      .sort({ createdAt: -1 })
      .limit(Number(limit))
      .skip(skip);

    // Get total count for pagination
    const total = await Product.countDocuments(query);

    res.status(200).json({
      success: true,
      count: products.length,
      total: total,
      page: Number(page),
      totalPages: Math.ceil(total / Number(limit)),
      data: products
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Get products by category and subcategory (more specific)
const getProductsBySubCategory = async (req, res) => {
  try {
    const { category, subCategory } = req.params;
    const { brand, minPrice, maxPrice, limit = 20, page = 1 } = req.query;
    
    // Build query object
    const query = { 
      category: category, 
      subCategory: subCategory, 
      isActive: true 
    };
    
    // Add optional filters
    if (brand) query.brand = new RegExp(brand, 'i'); // Case insensitive
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    // Calculate pagination
    const skip = (Number(page) - 1) * Number(limit);
    
    // Fetch products with pagination
    const products = await Product.find(query)
      .sort({ createdAt: -1 })
      .limit(Number(limit))
      .skip(skip);

    // Get total count for pagination
    const total = await Product.countDocuments(query);

    res.status(200).json({
      success: true,
      count: products.length,
      total: total,
      page: Number(page),
      totalPages: Math.ceil(total / Number(limit)),
      data: products
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully'
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  addProduct,
  editProduct,
  getProduct,
  getAllProducts,
  getProductsByCategory,
  getProductsBySubCategory,
  deleteProduct
};