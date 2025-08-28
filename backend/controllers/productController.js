const Product = require('../models/Product');

const addProduct = async (req, res) => {
  try {
    console.log('Received request body:', req.body); // Debug log
    const {
      seoTitle,
      slug,
      description,
      category,
      subCategory,
      brand,
      model,
      sku,
      price,
      originalPrice,
      weight,
      dimensions,
      stockQuantity,
      images,
      specifications,
      features,
      metaTitle,
      metaDescription,
      keywords,
      warranty,
      isActive,
      isFeatured
    } = req.body;

    // Validate required fields
    if (!seoTitle || seoTitle.trim() === '') {
      return res.status(400).json({
        success: false,
        message: 'Product title (seoTitle) is required'
      });
    }

    console.log('Creating product with seoTitle:', seoTitle); // Debug log

    const product = new Product({
      seoTitle,
      slug,
      description,
      category,
      subCategory,
      brand,
      model,
      sku,
      price,
      originalPrice,
      weight,
      dimensions,
      stockQuantity,
      images,
      specifications,
      features,
      metaTitle,
      metaDescription,
      keywords,
      warranty: warranty !== undefined ? warranty : 1,
      isActive: isActive !== undefined ? isActive : true,
      isFeatured: isFeatured !== undefined ? isFeatured : false
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
    let product;

    // First try to find by slug, then by ObjectId
    product = await Product.findOne({ slug: id });
    
    // If not found by slug and the id looks like a valid ObjectId, try findById
    if (!product) {
      // Check if the id is a valid ObjectId format (24 hex characters)
      if (id.match(/^[0-9a-fA-F]{24}$/)) {
        product = await Product.findById(id);
      }
    }

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